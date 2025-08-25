import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modulus',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modulo.html',
  styleUrl: './modulo.scss'
})
export class Modulo {

  activeTab: string = 'task1';
  reminder = signal<number | undefined>(undefined);
  quotient = signal<number | undefined>(undefined);

  moduloGroup = new FormGroup({
      dividend: new FormControl(5, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d+/)]
      }),
      divisor: new FormControl(3, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d+/)]
      })
  });


  calculateModulo() {
    const dividend = this.moduloGroup.get('dividend')?.value;
    const divisor = this.moduloGroup.get('divisor')?.value;

    if (dividend != null && divisor != null) {
      this.reminder.set(dividend % divisor);
      this.quotient.set(Math.floor(dividend / divisor));
    } else {
      alert('Please enter valid numbers for both dividend and divisor.');
    }
  }
}
