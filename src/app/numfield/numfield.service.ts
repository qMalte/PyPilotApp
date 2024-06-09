import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class NumfieldService {

  title = '';
  visible = false;
  initialValue = '';
  value = '';
  actionPerformed = new EventEmitter<string|null>();

  open(value: string, title: string): Promise<string|null> {
    return new Promise<string|null>(resolve => {

      if (Array.isArray(value)) {
        this.visible = false;
        resolve(null);
        return;
      }

      this.title = title;
      this.visible = true;
      this.initialValue = value;
      this.value = value;
      this.actionPerformed.subscribe(value => {
        this.visible = false;
        resolve(value);
      });
    });
  }

  cancel() {
    this.actionPerformed.emit(null);
  }

  confirm() {
    this.actionPerformed.emit(this.value);
  }

}
