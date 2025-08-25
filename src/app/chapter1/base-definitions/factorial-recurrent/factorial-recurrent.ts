import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factorial-recurrent',
  imports: [],
  templateUrl: './factorial-recurrent.html',
  styleUrl: './factorial-recurrent.scss'
})
export class FactorialRecurrent {
  title = signal('');
  
  activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.title.set( (this.activateRoute.snapshot.routeConfig?.title as string) || '');
  }
}
