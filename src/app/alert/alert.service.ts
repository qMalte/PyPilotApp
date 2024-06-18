import {Injectable} from "@angular/core";

@Injectable()
export class AlertService {

  visibility = false;
  title = '';
  message = '';
  stackTrace = '';

  show(title: string, message: string, duration: number = -1, stackTrace: string = ''): void {
    this.visibility = true;
    this.title = title;
    this.message = message;
    this.stackTrace = stackTrace;
    if (duration > 0) {
      setTimeout(() => {
        this.hide();
      }, duration);
    }
  }

  hide(): void {
    this.visibility = false;
  }

}
