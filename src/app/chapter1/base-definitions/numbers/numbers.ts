import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-numbers',
  imports: [],
  templateUrl: './numbers.html',
  styleUrl: './numbers.scss'
})
export class Numbers {

  title = signal('');
  activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.title.set( (this.activateRoute.snapshot.routeConfig?.title as string) || '');
  }
}
