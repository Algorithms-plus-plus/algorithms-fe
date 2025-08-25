import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modulus',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modulo.html',
  styleUrl: './modulo.scss'
})
export class Modulo implements OnInit {

  title = signal('');
  activeTab: string = 'task1';
  reminder = signal<number | undefined>(undefined);
  quotient = signal<number | undefined>(undefined);
  activateRoute = inject(ActivatedRoute);

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

  ngOnInit(): void {
    this.title.set( (this.activateRoute.snapshot.routeConfig?.title as string) || '');
  }


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
