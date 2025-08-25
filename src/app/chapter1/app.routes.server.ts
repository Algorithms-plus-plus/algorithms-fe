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
    title: 'Numbers',
  },
  {
    path: 'modulo',
    loadComponent: () => import('./base-definitions/modulo/modulo').then(m => m.Modulo),
    title: 'Modulo',
  },
  {
    path: 'sum-product',
    loadComponent: () => import('./base-definitions/sum/sum').then(m => m.Sum),
    title: 'Sum and Product',
  }
];
