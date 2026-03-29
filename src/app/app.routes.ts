import { Routes } from '@angular/router';
import { Auth } from './core/Layouts/auth-layout/auth/auth';
import { Login } from './feature/login/login';
import { ForgetPassword } from './feature/forget-password/forget-password';
import { NewPassword } from './feature/new-password/new-password';
import { CreatAccount } from './feature/creatAccount/component/creat-account/creat-account';
import { VerifiyOTP } from './feature/creatAccount/component/verifiy-otp/verifiy-otp';
import { Accountinfo } from './feature/creatAccount/component/accountinfo/accountinfo';
import { Accountpassword } from './feature/creatAccount/component/accountpassword/accountpassword';
import { ResetSend } from './feature/reset-send/reset-send';


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
