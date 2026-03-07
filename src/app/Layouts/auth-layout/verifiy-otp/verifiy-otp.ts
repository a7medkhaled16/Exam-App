import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-verifiy-otp',
  imports: [InputOtpModule,FormsModule,RouterLink],
  templateUrl: './verifiy-otp.html',
  styleUrl: './verifiy-otp.css',
})
export class VerifiyOTP {
otp: string = '';
send:boolean=false
}
