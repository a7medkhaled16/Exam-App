import { Routes } from '@angular/router';
import { Auth } from './Layouts/auth-layout/auth/auth';
import { Login } from './Layouts/auth-layout/login/login';
import { CreatAccount } from './Layouts/auth-layout/creat-account/creat-account';
import { VerifiyOTP } from './Layouts/auth-layout/verifiy-otp/verifiy-otp';
import { ForgetPassword } from './Layouts/auth-layout/forget-password/forget-password';
import { NewPassword } from './Layouts/auth-layout/new-password/new-password';

export const routes: Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth',component:Auth,children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:'login',component:Login},
        {path:'register',component:CreatAccount},
        {path:'otp',component:VerifiyOTP},
        {path:'forgetpassword',component:ForgetPassword},
        {path:'newpassword',component:NewPassword}
    ]}
];
