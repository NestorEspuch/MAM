import { Routes } from '@angular/router';

export const GACHA_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./gacha.component').then((m) => m.GachaComponent),
  },
  {
    path: 'levels',
    loadComponent: () =>
      import('./types/types.component').then((m) => m.TypesComponent),
  },
  { path: '**', redirectTo: '/' },
];
