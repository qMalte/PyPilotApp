import {Injectable} from "@angular/core";
import {io, Socket} from "socket.io-client";
import {AlertService} from "../app/alert/alert.service";
import {environment} from "../environments/environment";
import {PyPilotData} from "../classes/PyPilotData";
import {PyPilotParameter} from "../classes/PyPilotParameter";
import {Subject} from "rxjs";
import {ResourceHelper} from "../helpers/ResourceHelper";

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {

  socket: Socket;
  changed = new Subject<void>();

  private watchList: string[] = [];
  private dataList: PyPilotData[] = [];

  constructor(private alertService: AlertService) {
    console.log('WebsocketService');

    this.socket = io(environment.pyPilotUrl); // , {transports: ['websocket', 'polling', 'flashsocket']}

    this.socket.on("connect", () => {
      console.log('Verbindung über WebSocket wurde erfolgreich hergestellt!');
      this.alertService.hide();
      this.prepareWatching();
    });

    this.socket.on("pypilot", (msg) => {
      this.changed.next();
      const data = JSON.parse(msg);
      for (const key in data) {
        const item = this.dataList.find(d => d.key === key);
        if (item != null) {
          item.value = data;
        } else {
          this.dataList.push({
            key: key,
            value: data[key]
          });
        }
      }
      for (const param in PyPilotParameter) {
        // @ts-ignore
        const key = PyPilotParameter[param];
        if (key in data) {

          // @ts-ignore
          const value = data[key];

          const item = this.dataList.find(d => d.key === key);
          if (item != null) {
            item.value = data;
          } else {
            this.dataList.push({
              key: key,
              value
            });
          }
        }
      }
    });

    this.socket.on("pypilot_disconnect", () => {
      console.debug('Verbindung über WebSocket wurde getrennt!');
      alertService.show(
        ResourceHelper.DefaultResource.ConnectionFailedMessageTitle,
        ResourceHelper.DefaultResource.ConnectionFailedMessageText);
    });

    this.socket.on("connect_error", (e) => {
      console.debug('Verbindung über WebSocket konnte nicht hergestellt werden!');
      console.debug(e);
      alertService.show(
        ResourceHelper.DefaultResource.ConnectionFailedMessageTitle,
        ResourceHelper.DefaultResource.ConnectionFailedMessageText);
    });

  }

  pyPilotWatch(name: string, period = true) {
    if (this.watchList.includes(name)) {
      return;
    }
    this.socket.emit('pypilot', 'watch={"' + name + '":' + JSON.stringify(period) + '}');
    if (!this.watchList.some(x => x === name)) {
      this.watchList.push(name);
    }
  }

  prepareWatching() {
    for (const paramKey in PyPilotParameter) {
      // @ts-ignore
      this.pyPilotWatch(PyPilotParameter[paramKey]);
    }
  }

  pyPilotSet(name: string, value: any) {
    console.debug(name + '=' + this.convertValue(value));
    this.socket.emit('pypilot', name + '=' + this.convertValue(value));
    this.pyPilotWatch(name, false);
  }

  private convertValue(value: any) {
    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    } else if (typeof value === 'number') {
      return value;
    } else {
      if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
        return value.toLowerCase() === 'true' ? 1 : 0;
      } else {
        return `"${value}"`;
      }
    }
  }

  getDataList() {
    return this.dataList;
  }

}
