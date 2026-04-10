import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('../login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('../creatAccount/component/creat-account/creat-account').then(m => m.CreatAccount) },
  { path: 'otp', loadComponent: () => import('../creatAccount/component/verifiy-otp/verifiy-otp').then(m => m.VerifiyOTP) },
  { path: 'info', loadComponent: () => import('../creatAccount/component/accountinfo/accountinfo').then(m => m.Accountinfo) },
  { path: 'accountpass', loadComponent: () => import('../creatAccount/component/accountpassword/accountpassword').then(m => m.Accountpassword) },
  { path: 'forgetpassword', loadComponent: () => import('../forget-password/forget-password').then(m => m.ForgetPassword) },
  { path: 'restmassege', loadComponent: () => import('../reset-send/reset-send').then(m => m.ResetSend) }
];