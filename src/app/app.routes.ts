import { Routes } from '@angular/router';
import { Auth } from './core/Layouts/auth-layout/auth/auth';
import { NewPassword } from './core/auth/new-password/new-password';
import { Login } from './core/auth/login/login';
import { CreatAccount } from './core/auth/creatAccount/component/creat-account/creat-account';
import { VerifiyOTP } from './core/auth/creatAccount/component/verifiy-otp/verifiy-otp';
import { Accountinfo } from './core/auth/creatAccount/component/accountinfo/accountinfo';
import { Accountpassword } from './core/auth/creatAccount/component/accountpassword/accountpassword';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { ResetSend } from './core/auth/reset-send/reset-send';



export const routes: Routes = [
    {path:'reset-password',component:NewPassword},
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth',component:Auth,children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:'login',component:Login},
        {path:'register',component:CreatAccount},
        {path:'otp',component:VerifiyOTP},
        {path:'info',component:Accountinfo},
        {path:'accountpass',component:Accountpassword},
        {path:'forgetpassword',component:ForgetPassword},
        {path:'restmassege',component:ResetSend}
    ]}
];
