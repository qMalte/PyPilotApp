import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from "../../services/websocket.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {RuderSenseComponent} from "../ruder-sense/ruder-sense.component";
import {PyPilotParameter} from "../../classes/PyPilotParameter";

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterLinkActive, FormsModule, RuderSenseComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  providers: [WebsocketService, HttpClient]
})
export class StatusComponent {

  constructor(private socketService: WebsocketService) {
    //
  }

  get apModeClass() {
    return ApMode;
  }

  get pyPilotParameterClass() {
    return PyPilotParameter;
  }

  get apMode() {
    return this.socketService.getDataList().find(x => x.key == PyPilotParameter.apMode)?.value[PyPilotParameter.apMode] ?? ApMode.Compass;
  }

  get state() {
    return this.socketService.getDataList().find(x => x.key == PyPilotParameter.apEnabled)?.value[PyPilotParameter.apEnabled] ?? false;
  }

  get headingCommand() {
    const value = this.socketService.getDataList().find(x => x.key == PyPilotParameter.apHeadingCommand)?.value[PyPilotParameter.apHeadingCommand];
    return value == undefined ? '-,--' : Math.round(value);
  }

  get course() {
    const value = this.socketService.getDataList().find(x => x.key == PyPilotParameter.apHeading)?.value[PyPilotParameter.apHeading];
    return value == undefined ? '-,--' : Math.round(value);
  }

  get isPositionDataExists() {
    const value = this.socketService.getDataList().find(x => x.key == PyPilotParameter.gpsSource)?.value[PyPilotParameter.gpsSource];
    if (value == undefined || typeof value != 'string') {
      return false;
    }
    return value != 'none';
  }

  get isWindDataExists() {
    const value = this.socketService.getDataList().find(x => x.key == PyPilotParameter.windSource)?.value[PyPilotParameter.windSource];
    if (value == undefined || typeof value != 'string') {
      return false;
    }
    return value != 'none';
  }

  setValue(key: PyPilotParameter, value: any) {
    this.socketService.pyPilotSet(key, value);
  }

  toggleAp(state: boolean) {
    this.setValue(PyPilotParameter.apEnabled, state);
    if (state) {
      this.setValue(PyPilotParameter.apHeadingCommand, this.course);
    }
    this.animateCourse('course2');
  }

  setCourse(course: number) {
    const heading = this.headingCommand;
    if (heading == '-,--') {
      return;
    }
    this.setValue(PyPilotParameter.apHeadingCommand, heading + course);
    this.animateCourse();
  }

  animateCourse(elementName: string = 'course') {
    const element = document.getElementById(elementName);
    element?.classList.add('wobble');
    setTimeout(() => {
      element?.classList.remove('wobble');
    }, 1000);
  }

}

export enum ApMode {
  Wind = 'wind',
  GPS = 'gps',
  Compass = 'compass',
}
