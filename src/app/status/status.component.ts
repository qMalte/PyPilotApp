import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from "../../services/websocket.service";
import {PyPilotParameter} from "../../../../src/classes/PyPilotParameter";
import {PyPilotService} from "../../services/pypilot.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {RuderSenseComponent} from "../ruder-sense/ruder-sense.component";

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterLinkActive, FormsModule, RuderSenseComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  providers: [WebsocketService, PyPilotService, HttpClient]
})
export class StatusComponent implements OnInit {

  state = false;
  course = 0;
  headingCommand = 0;
  mode?: string;

  lastUpdateInterval = 0;

  constructor(private socketService: WebsocketService,
              private pyPilotService: PyPilotService) {
    //
  }

  get ApMode() {
    return APMode;
  }

  ngOnInit() {
    this.socketService.socket.on(PyPilotParameter.apHeading, (data: number) => {
      this.lastUpdateInterval = 0;
      this.course = Math.round(data);
    });
    this.socketService.socket.on(PyPilotParameter.apHeadingCommand, (data: number) => {
      this.lastUpdateInterval = 0;
      this.headingCommand = Math.round(data);
    });
    this.socketService.socket.on(PyPilotParameter.apEnabled, (data: boolean) => {
      this.lastUpdateInterval = 0;
      this.state = data;
    });
    this.socketService.socket.on(PyPilotParameter.apMode, (data: string) => {
      this.lastUpdateInterval = 0;
      this.mode = data;
    });

    this.pyPilotService.getData().then(data  => {
      console.log(data);
      this.mode = data.find(x => x.key == PyPilotParameter.apMode)?.value[PyPilotParameter.apMode] as string;
    });

    setInterval(() => {
      this.lastUpdateInterval++;
    }, 1000);

    setInterval(async () => {
      if (this.lastUpdateInterval > 3) {
        await this.pyPilotService.watch();
      }
    }, 4000);

  }

  async toggleAp(state: boolean) {
    await this.pyPilotService.postData(PyPilotParameter.apEnabled, state);
    if (state) {
      await this.pyPilotService.postData(PyPilotParameter.apHeadingCommand, this.course);
    }
    this.animateCourse('course2');
  }

  async setHeading(heading: number) {
    if (!this.state) {
      return;
    }
    await this.pyPilotService.postData(PyPilotParameter.apHeadingCommand, heading);
    this.animateCourse();
  }

  animateCourse(elementName: string = 'course') {
    const element = document.getElementById(elementName);
    element?.classList.add('wobble');
    setTimeout(() => {
      element?.classList.remove('wobble');
    }, 1000);
  }

  async setMode(mode: APMode) {
    await this.pyPilotService.postData(PyPilotParameter.apMode, mode.toLowerCase());
    this.mode = mode;
  }

}

export enum APMode {
  Wind = 'wind',
  GPS = 'gps',
  Compass = 'compass',
}
