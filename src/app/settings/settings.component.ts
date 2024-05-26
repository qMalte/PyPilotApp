import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from "../../services/websocket.service";
import {PyPilotService} from "../../services/pypilot.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {PyPilotParameterDetails} from "../../../../src/classes/PyPilotParameterDetails";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NumfieldComponent} from "../numfield/numfield.component";
import {NumfieldService} from "../numfield/numfield.service";
import {PyPilotData} from "../../../../src/classes/PyPilotData";
import {AlertService} from "../alert/alert.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule, NumfieldComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  providers: [WebsocketService, PyPilotService, HttpClient]
})
export class SettingsComponent implements OnInit {

  dataList: PyPilotData[] = [];
  parameterList: any[] = [];
  showKeys: boolean = false;

  constructor(private socketService: WebsocketService,
              private pyPilotService: PyPilotService,
              public numFieldService: NumfieldService,
              private alertService: AlertService) {
    //
  }

  async ngOnInit() {
    for (const param in PyPilotParameterDetails) {
      this.parameterList.push({
        title: param,
        // @ts-ignore
        param: PyPilotParameterDetails[param]
      });
    }

    this.parameterList = this.parameterList.filter(x => x.param.type != 'SensorValue');

    this.showKeys = localStorage.getItem('showKeys') == '1';

    this.dataList = await this.pyPilotService.getData();
    console.log(this.dataList);
  }

  saveLocalProperties() {
    localStorage.setItem('showKeys', this.showKeys ? '1' : '0');
  }

  async editNumericValue(key: string) {
    const numFieldQuery = await this.numFieldService.open();
    if (numFieldQuery != null) {
      await this.handleSave(key, numFieldQuery);
    }
  }

  async handleSave(key: string, value: any) {
    if (!await this.pyPilotService.postData(key, value)) {
      this.alertService.show(
        'Speicherfehler',
        'Es ist ein Fehler beim speichern eines Parameter aufgetreten.',
        8000);
    }
  }

  getValueByKey<T>(key: string): T {
    return this.dataList.find(x => x.key == key)?.value;
  }

}
