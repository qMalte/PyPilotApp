import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from "../../services/websocket.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {PyPilotParameter} from "../../classes/PyPilotParameter";

@Component({
  selector: 'app-turn',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './turn.component.html',
  styleUrl: './turn.component.scss',
  providers: [WebsocketService, HttpClient]
})
export class TurnComponent implements OnInit {

  state = false;
  course = 0;
  headingCommand = 0;
  private CourseHelper: any;

  constructor(private socketService: WebsocketService) {
    //
  }

  ngOnInit() {
    this.socketService.socket.on(PyPilotParameter.apHeading, (data: number) => {
      this.course = Math.round(data);
    });
    this.socketService.socket.on(PyPilotParameter.apHeadingCommand, (data: number) => {
      console.log(data);
      this.headingCommand = Math.round(data);
    });
    this.socketService.socket.on(PyPilotParameter.apEnabled, (data: boolean) => {
      this.state = data;
    });
  }

  async turn(byBackboard = false) {
    if (!this.state) {
      return;
    }
  }

}
