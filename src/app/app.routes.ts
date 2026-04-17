import { Routes } from '@angular/router';
import { authRoutes } from './feature/auth/auth routes/auth.routes ';
import { Mainlayout } from './core/Layouts/main-layout/mainlayout/mainlayout';

export const routes: Routes = [
  {
  path: 'reset-password',
  loadComponent: () =>import('./feature/auth/new-pass-layout/new-pass-layout').then(m => m.NewPassLayout)
},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },  
  { path: 'auth', loadComponent: () => import('./core/Layouts/auth-layout/auth/auth').then(m => m.Auth), children: authRoutes },

  {path:'main',component:Mainlayout}

];