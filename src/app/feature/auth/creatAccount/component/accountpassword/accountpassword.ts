import { Component, inject, signal } from '@angular/core';
import { Password, PasswordModule } from 'primeng/password';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registerservice } from '../../services/registerservice';
import { AuthService } from '../../../../../../../dist/authlib';
import { Validation } from '../../../../../shared/component/validation/validation';
import { Errorbanner } from "../../../errorbanner/errorbanner";


@Component({
  selector: 'app-accountpassword',
  imports: [PasswordModule, ReactiveFormsModule, Validation, Errorbanner],
  templateUrl: './accountpassword.html',
  styleUrl: './accountpassword.css',
})
export class Accountpassword {

_authService=inject(AuthService)
registerservice=inject(Registerservice)
router=inject(Router)

  errorMessage=  signal('');

passform:FormGroup=new FormGroup({
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  confirmPassword:new FormControl('',[Validators.required])
},{validators:this.repasswordmatch})

repasswordmatch(control:AbstractControl){
   return control.get('password')?.value === control.get('confirmPassword')?.value?null:{mismatch:true}
  }


register(){

  const data={
  
  username: this.registerservice.username,
  email: this.registerservice.email,
  password: this.passform.value.password,
  confirmPassword: this.passform.value.confirmPassword,
  firstName: this.registerservice.firstname,
  lastName: this.registerservice.lastname,
  phone: this.registerservice.phone,

}
   this._authService.register(data).subscribe({
    next:(res)=>{console.log(res)
      this.router.navigate(['/auth/login']);
    },
  error:(err)=>{
    this.errorMessage.set(err.error.message)
  }
  })
}

}
