import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-power-log-sqrt',
  imports: [],
  templateUrl: './power-log-sqrt.html',
  styleUrl: './power-log-sqrt.scss'
})
export class PowerLogSqrt implements OnInit {

  title = signal('');
  
  activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.title.set( (this.activateRoute.snapshot.routeConfig?.title as string) || '');
  }


}
