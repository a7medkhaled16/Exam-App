import { Component, ViewEncapsulation } from '@angular/core';
import { StaticSide } from "../static-side/static-side";
import { Login } from "../login/login";
import { CreatAccount } from '../creat-account/creat-account';
import { VerifiyOTP } from '../verifiy-otp/verifiy-otp';
import { ForgetPassword } from '../forget-password/forget-password';
import { NewPassword } from '../new-password/new-password';
import { ResetSend } from '../reset-send/reset-send';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-auth',
  imports: [StaticSide,RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

}
