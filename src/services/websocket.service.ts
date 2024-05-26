import {Injectable} from "@angular/core";
import {io, Socket} from "socket.io-client";
import {AlertService} from "../app/alert/alert.service";
import {SocketChannel} from "../../../src/classes/SocketChannel";

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {

  socket: Socket;

  constructor(private alertService: AlertService) {
    this.socket = io('http://127.0.0.1');

    this.socket.on("connect", () => {
      console.log('Verbindung über WebSocket wurde erfolgreich hergestellt!');
      this.alertService.hide();
    });

    this.socket.on(SocketChannel.PyPilotConnect, () => {
      this.alertService.hide();
    });

    this.socket.on("connect_error", () => {
      alertService.show(
        'Verbindung Fehlgeschlagen!',
        'Es konnte keine Verbindung zum Backend hergestellt werden.');
    });

    this.socket.on(SocketChannel.PyPilotConnectionFailed, () => {
      alertService.show(
        'Verbindung Fehlgeschlagen!',
        'Es konnte keine Verbindung vom Backend zum zentralen PyPilot-Server hergestellt werden.');
    });

  }

}
