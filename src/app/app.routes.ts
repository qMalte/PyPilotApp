import { Routes } from '@angular/router';
import {StatusComponent} from "./status/status.component";
import {TurnComponent} from "./turn/turn.component";
import {SettingsComponent} from "./settings/settings.component";

export const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'turn', component: TurnComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/status', pathMatch: 'full' }
];
