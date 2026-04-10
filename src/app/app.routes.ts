import { Routes } from '@angular/router';
import { authRoutes } from './feature/auth/auth routes/auth.routes ';

export const routes: Routes = [
  { path: 'reset-password', loadComponent: () => import('./feature/auth/new-password/new-password').then(m => m.NewPassword) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadComponent: () => import('./core/Layouts/auth-layout/auth/auth').then(m => m.Auth), children: authRoutes }
];