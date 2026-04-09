import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { AuthService } from '../../../../../../dist/authlib';
import { Registerservice } from '../../services/registerservice';


@Component({
  selector: 'app-verifiy-otp',
  imports: [InputOtpModule,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './verifiy-otp.html',
  styleUrl: './verifiy-otp.css',
})
export class VerifiyOTP {
otp: string = '';
send:boolean=false
_authService=inject(AuthService)
registerservice=inject(Registerservice)
router=inject(Router)




Otpform:FormGroup=new FormGroup({
  otp:new FormControl('')
})

confirmotp(){
  this._authService.confirmverifiy({email:this.registerservice.email ,code:this.Otpform.value.otp}).subscribe({
    next:(res)=>{
      console.log(this.registerservice.email,this.Otpform.value.otp)
      console.log(res)
      this.router.navigate(['/auth/info']);
    },
  error:(err)=>{console.log(err)}
  })

}


}
