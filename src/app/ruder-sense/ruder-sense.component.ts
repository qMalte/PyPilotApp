import {Component, ElementRef, Input, IterableDiffers, OnInit, ViewChild} from '@angular/core';
import {CommonModule, NgStyle} from '@angular/common';
import {SignalKClientModule} from "signalk-client-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WebsocketService} from "../../services/websocket.service";
import {SignalKService} from "../../services/SignalK.Service";
import {SignalkData} from "../../models/SignalkData";

@Component({
  selector: 'app-ruder-sense',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SignalKClientModule],
  templateUrl: './ruder-sense.component.html',
  styleUrl: './ruder-sense.component.scss',
  providers: [
    //
  ]
})
export class RuderSenseComponent implements OnInit {

  @Input() inputRudderAngle: number = 0;

  ruderAngle: number = -1;

  indicatorWidth: number = 50;
  indicatorColor: string = 'transparent';

  marginLeft: number = 0;
  marginRight: number = 0;

  private iterableDiffer: any;

  constructor(private signalK: SignalKService, differs: IterableDiffers) {
    this.iterableDiffer = differs.find([]).create();
  }

  ngDoCheck(): void {
    const changes = this.iterableDiffer.diff(this.signalK.dataList);
    if (changes) {
      this.signalK.dataList.forEach((element: SignalkData) => {
        switch (element.getDesc()) {
          case 'steering.rudderAngle':
            const data = element.getValue();
            this.ruderAngle = this.umrechnenWert(this.radiansToDegrees(data));
            this.updateRudderGauge();
            break;
        }
      });
    }
  }

  ngOnInit() {
    //
  }

  updateRudderGauge() {
    this.ruderAngle = this.ruderAngle * (-1);
    if (this.ruderAngle < 0) {
      this.indicatorColor = '#e83333';
      this.indicatorWidth = this.ruderAngle * (-1);
      this.marginLeft = this.ruderAngle / 2;
    } else if (this.ruderAngle > 0) {
      this.indicatorColor = '#52e33c';
      this.indicatorWidth = this.ruderAngle;
      this.marginLeft = this.ruderAngle / 2;
    } else {
      this.indicatorColor = 'transparent';
    }
  }

  umrechnenWert(sensorWert: number): number {
    if (sensorWert < -30 || sensorWert > 30) {
      return 0;
    }

    const vonBereichMin = -30;
    const vonBereichMax = 30;
    const zuBereichMin = -50;
    const zuBereichMax = 50;

    const relValue = (sensorWert - vonBereichMin) / (vonBereichMax - vonBereichMin);
    const zielWert = (relValue * (zuBereichMax - zuBereichMin)) + zuBereichMin;

    return zielWert;
  }

  radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

}
