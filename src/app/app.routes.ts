import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'chapter1', loadChildren: () => import('./chapter1/routes').then(m => m.serverRoutes) },
    { path: '**', redirectTo: '' }
];
