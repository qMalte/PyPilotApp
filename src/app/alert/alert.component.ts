import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertService} from "./alert.service";
import {environment} from "../../environments/environment";
import {FormsModule} from "@angular/forms";
import {ResourceHelper} from "../../helpers/ResourceHelper";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  pyPyPilotUrl = environment.pyPilotUrl;
  signalKUrl = environment.signalKHost;
  signalKPort = environment.signalKPort;
  isFixedConfiguration = environment.fixValues;

  get Resource() {
    return ResourceHelper.DefaultResource;
  }

  constructor(public alertService: AlertService) {
    //
  }

  saveAndRestart() {
    localStorage.setItem('pyPilotUrl', this.pyPyPilotUrl);
    localStorage.setItem('signalKUrl', this.signalKUrl);
    localStorage.setItem('signalKPort', this.signalKPort.toString());
    window.location.reload();
  }

}
