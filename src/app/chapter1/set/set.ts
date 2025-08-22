import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SetService } from './services/set-service';
import { SetResponse } from './models/set-response';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-set',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './set.html',
  styleUrl: './set.scss',
  providers: [SetService],
})
export class SetComponent implements OnInit {

  setService = inject(SetService);
  destroyRef = inject(DestroyRef);
  // response!: SetResponse;
  response$ = signal<SetResponse | undefined>(undefined);

  // response$!: Observable<SetResponse>;

  setsGroup = new FormGroup({
      set1: new FormControl('1,2,4,5,7', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d+(,\d+)*$/)]
      }),
      set2: new FormControl('2,3,4,5,6', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d+(,\d+)*$/)]
      })
  });

  activeTab: string = 'task1';

  ngOnInit() {
  }

  onSubmit() {
    const s1 = this.setsGroup.get('set1')?.value;
    const s2 = this.setsGroup.get('set2')?.value;

    if (s1 && s2) {
      // Process the sets as needed
      const set1 = s1.split(',').map(item => +item.trim());
      const set2 = s2.split(',').map(item => +item.trim());

      // this.response$ = this.setService.getSets({ set1: set1, set2: set2 });

      this.setService.getSets({ set1: set1, set2: set2 })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response: SetResponse) => {
            console.log('Response received:', response)
            // this.response = response;
            this.response$.set(response);
          },
          error: (error) => {
            console.error('Error fetching sets:', error);
          }
        });
    }

  }
}
