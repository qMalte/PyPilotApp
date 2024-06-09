import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from "../../services/websocket.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NumfieldComponent} from "../numfield/numfield.component";
import {NumfieldService} from "../numfield/numfield.service";
import {AlertService} from "../alert/alert.service";
import {PyPilotData} from "../../classes/PyPilotData";
import {PyPilotParameterDetails} from "../../classes/PyPilotParameterDetails";
import {PyPilotKeyHelper} from "../../helpers/PyPilotKeyHelper";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule, NumfieldComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  providers: [WebsocketService, HttpClient]
})
export class SettingsComponent implements OnInit {

  dataList: PyPilotData[] = [];
  parameterList: any[] = [];
  showKeys: boolean = false;

  constructor(private socketService: WebsocketService,
              public numFieldService: NumfieldService,
              private alertService: AlertService) {
    //
  }

  async ngOnInit() {

    this.dataList = this.socketService.getDataList();
    this.parameterList = [];

    for (const param in PyPilotParameterDetails) {
      this.parameterList.push({
        title: param,
        // @ts-ignore
        param: PyPilotParameterDetails[param]
      });
    }

    this.parameterList = this.parameterList
      .filter(x => x.param.type != 'SensorValue')
      .filter(x => x.param.isDisplayed);

    this.showKeys = localStorage.getItem('showKeys') == '1';

    console.log(this.dataList);
  }

  saveLocalProperties() {
    localStorage.setItem('showKeys', this.showKeys ? '1' : '0');
  }

  async editNumericValue(key: string) {
    const numFieldQuery = await this.numFieldService.open(this.getValueByKey(key), key);
    if (numFieldQuery != null) {
      await this.handleSave(key, numFieldQuery);
    }
  }

  async handleSave(key: string, value: any) {
    this.socketService.pyPilotSet(key, value);
  }

  getValueByKey<T>(key: string): T {
    return this.dataList.find(x => x.key == key)?.value[key];
  }

  getDescByKey(key: string) {
    return PyPilotKeyHelper.getDescription(key);
  }

  isValueExists(key: string): boolean {
    return this.dataList.find(x => x.key == key) != null;
  }

}
