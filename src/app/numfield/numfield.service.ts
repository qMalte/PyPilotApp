import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class NumfieldService {

  visible: boolean = false;
  value = '';
  actionPerformed: EventEmitter<string|null> = new EventEmitter<string|null>();

  open() {
    return new Promise<string|null>(resolve => {
      this.visible = true;
      this.value = '';
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
