import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: Routes = [
  {
    path: 'sets',
    loadComponent: () => import('./base-definitions/set/set').then(m => m.SetComponent),
    title: 'Sets',
  },
  {
    path: 'numbers',
    loadComponent: () => import('./base-definitions/numbers/numbers').then(m => m.Numbers),
    title: 'Sets',
  }
];
