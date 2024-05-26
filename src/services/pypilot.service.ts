import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../app/app.config";
import {PyPilotData} from "../../../src/classes/PyPilotData";

@Injectable()
export class PyPilotService {

  constructor(private http: HttpClient) {
    //
  }

  postData(name: string, value: any) {
    return new Promise<boolean>((resolve) => {
      this.http
        .post(`${environment.apiUrl}/pyPilot`, {name, value})
        .subscribe(() => {
          resolve(true);
        }).add(() => {
          resolve(false);
      });
    });
  }

  watch() {
    return new Promise<boolean>((resolve) => {
      this.http
        .post(`${environment.apiUrl}/pyPilot/watch`, {})
        .subscribe(() => {
          resolve(true);
        }).add(() => {
        resolve(false);
      });
    });
  }

  getData() {
    return new Promise<PyPilotData[]>((resolve) => {
      this.http
        .get<PyPilotData[]>(`${environment.apiUrl}/pyPilot/data`)
        .subscribe(data => {
          resolve(data);
        }).add(() => {
        resolve([]);
      });
    });
  }

}
