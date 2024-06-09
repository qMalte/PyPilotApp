import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NumfieldService} from "./numfield.service";

@Component({
  selector: 'app-numfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numfield.component.html',
  styleUrl: './numfield.component.scss'
})
export class NumfieldComponent {

  constructor(public service: NumfieldService) {
    //
  }

  addDigit(digit: string) {
    this.service.value += digit;
  }

  removeDigit() {
    this.service.value = this.service.value.toString().slice(0, -1);
  }

  round(number: number) {
    return Math.round(number * 100) / 100;
  }

}
