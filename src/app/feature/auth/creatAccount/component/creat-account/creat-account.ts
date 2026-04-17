import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Registerservice } from '../../services/registerservice';
import { AuthService } from '../../../../../../../dist/authlib';
import { Validation } from '../../../../../shared/component/validation/validation';
import { Errorbanner } from "../../../errorbanner/errorbanner";




@Component({
  selector: 'app-creat-account',
  imports: [ReactiveFormsModule, Validation, Errorbanner, RouterLink],
templateUrl: './creat-account.html',
  styleUrl: './creat-account.css',
})
export class CreatAccount {

  errorMessage=  signal('');

_authService=inject(AuthService)
registerservice=inject(Registerservice)
router=inject(Router)

emailform :FormGroup= new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email])
})
 


sendVerify(){
this.errorMessage.set('')
  this.registerservice.email=this.emailform.value.email
this._authService.sendverifiy(this.emailform.value).subscribe({
   next: (res) => {
      this.router.navigate(['/auth/otp']);
    },
    error: (err) => {
      this.errorMessage.set(err.error?.message);
    }

})
}

}
