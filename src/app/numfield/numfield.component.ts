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

}
