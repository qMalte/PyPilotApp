import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {NumfieldService} from "./numfield/numfield.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    NumfieldService
  ]
};

export const environment = {
  apiUrl: 'http://127.0.0.1/api/v1'
}
