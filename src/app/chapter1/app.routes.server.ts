import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: Routes = [
  {
    path: 'sets',
    loadComponent: () => import('./set/set').then(m => m.Set),
    title: 'Sets',
  }
];
