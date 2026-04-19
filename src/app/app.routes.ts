import { Routes } from '@angular/router';
import { authRoutes } from './feature/auth/auth routes/auth.routes ';
import { Mainlayout } from './core/Layouts/main-layout/mainlayout/mainlayout';
import { Diplomas } from './feature/home/component/diplomas/diplomas';
import { Exams } from './feature/home/component/exams/exams';
import { Questions } from './feature/home/component/questions/questions';
import { Result } from './feature/home/component/result/result';

export const routes: Routes = [
  {
  path: 'reset-password',
  loadComponent: () =>import('./feature/auth/new-pass-layout/new-pass-layout').then(m => m.NewPassLayout)
},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },  
  { path: 'auth', loadComponent: () => import('./core/Layouts/auth-layout/auth/auth').then(m => m.Auth), children: authRoutes },

  {path:'main',component:Mainlayout , children:[
    {path:'',redirectTo:'diplomas',pathMatch:'full'},
    {path:'diplomas',component:Diplomas},
     {path:'exams/:id', component:Exams},
  {path:'questions/:id', component:Questions},
  // {path:'questions', component:Questions},
    {path:'result/:id',component:Result}
  ]}

];