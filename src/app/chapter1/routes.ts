import { Routes } from '@angular/router';

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
  },
  {
    path: 'power-log-sqrt',
    loadComponent: () => import('./base-definitions/power-log-sqrt/power-log-sqrt').then(m => m.PowerLogSqrt),
    title: 'Power, logN and sqrt',
  },
  {
    path: 'factorials-recurrent',
    loadComponent: () => import('./base-definitions/factorial-recurrent/factorial-recurrent').then(m => m.FactorialRecurrent),
    title: 'Factorials and Recurrent Functions',
  }
];
