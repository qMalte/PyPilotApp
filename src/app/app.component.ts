import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AlertComponent} from "./alert/alert.component";
import {AlertService} from "./alert/alert.service";
import {SignalKService} from "../services/SignalK.Service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AlertService,
    SignalKService
  ]
})
export class AppComponent {
  title = 'pypilot-gui';
}
