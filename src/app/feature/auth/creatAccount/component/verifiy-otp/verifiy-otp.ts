import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { AuthService } from '../../../../../../../dist/authlib';
import { Registerservice } from '../../services/registerservice';
import { Errorbanner } from "../../../errorbanner/errorbanner";



@Component({
  selector: 'app-verifiy-otp',
  imports: [InputOtpModule, FormsModule, RouterLink, ReactiveFormsModule, Errorbanner],
  templateUrl: './verifiy-otp.html',
  styleUrl: './verifiy-otp.css',
})
export class VerifiyOTP {
otp: string = '';
send:boolean=false
errorMessage=  signal('');
_authService=inject(AuthService)
registerservice=inject(Registerservice)
router=inject(Router)




Otpform:FormGroup=new FormGroup({
  otp:new FormControl('')
})

confirmotp(){
  this._authService.confirmverifiy({email:this.registerservice.email ,code:this.Otpform.value.otp}).subscribe({
    next:(res)=>{
      this.router.navigate(['/auth/info']);
    },
  error:(err)=>{
      this.errorMessage.set(err.error?.message);
  }
  })

}

sendVerify(){
this.errorMessage.set('')
  
this._authService.sendverifiy({email:this.registerservice.email}).subscribe({
     next: (res) => {
      this.router.navigate(['/auth/info']);
    },
    error: (err) => {
      this.errorMessage.set(err.error?.message);
    }

})
}


}
