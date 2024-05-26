import {Injectable} from '@angular/core';
import {SignalKClient} from 'signalk-client-angular';
import {SignalkData} from "../models/SignalkData";

@Injectable()
export class SignalKService {

  static state = false;

  public dataList: Array<SignalkData> = new Array<SignalkData>();

  constructor(public sk: SignalKClient) {

    const host = '192.168.9.202';
    const port = 3000;

    this.sk.connectStream(host, port, false, 'self');

    this.sk.stream.onConnect.subscribe(e => {
      console.log('Verbindung zum SignalK Server erfolgreich hergestellt!');
      SignalKService.state = true;
    });

    this.sk.stream.onError.subscribe(err => {
      SignalKService.state = false;
      this.sk.connectStream(host, port, false, 'self');
    });
    this.sk.stream.onClose.subscribe(err => {
      SignalKService.state = false;
      this.sk.connectStream(host, port, false, 'self');
    });

    this.sk.stream.onMessage.subscribe(e => {

      if (e.updates !== undefined) {
        e.updates.forEach((element: any) => {
          if (element.values !== undefined) {
            element.values.forEach((value: any) => {

              const data: SignalkData = new SignalkData(value.path, value.value);

              // tslint:disable-next-line:no-shadowed-variable
              if (this.dataList.some(data => data.getDesc() === value.path)) {
                const currentData: SignalkData = this.dataList.find(data => data.getDesc() === value.path)!;
                this.dataList.splice(this.dataList.indexOf(currentData), 1);
                this.dataList.push(data);
                // tslint:disable-next-line:no-shadowed-variable
              } else if (!this.dataList.some(data => data.getDesc() === value.path)) {
                this.dataList.push(data);
              }

            });
          }
        });
      }

    });

  }

}
