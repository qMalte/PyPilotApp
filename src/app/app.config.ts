import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {NumfieldService} from "./numfield/numfield.service";
import {SignalKClient} from "signalk-client-angular";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    NumfieldService,
    SignalKClient
  ]
};

export const environment = {
  apiUrl: 'http://127.0.0.1/api/v1'
}
