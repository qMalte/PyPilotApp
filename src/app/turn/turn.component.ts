import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from "../../services/websocket.service";
import {PyPilotParameter} from "../../../../src/classes/PyPilotParameter";
import {PyPilotService} from "../../services/pypilot.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {CourseHelper} from "../../../../src/helpers/CourseHelper";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-turn',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './turn.component.html',
  styleUrl: './turn.component.scss',
  providers: [WebsocketService, PyPilotService, HttpClient]
})
export class TurnComponent implements OnInit {

  state = false;
  course = 0;
  headingCommand = 0;

  constructor(private socketService: WebsocketService, private pyPilotService: PyPilotService) {
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
    await this.pyPilotService.postData(PyPilotParameter.apHeadingCommand, CourseHelper.adjustCourse(this.course, byBackboard ? -180 : 180));
  }

}
