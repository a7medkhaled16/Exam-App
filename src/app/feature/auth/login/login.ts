import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../../dist/authlib';
import { Validation } from '../../../shared/component/validation/validation';
import { Errorbanner } from "../errorbanner/errorbanner";

interface ApiError {
  message: string;
}

interface ErrorResponse {
  error: ApiError;
}

@Component({
  selector: 'app-login',
  imports: [PasswordModule, RouterLink, RouterModule, ReactiveFormsModule, Validation, Errorbanner],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
value:string=''
  errorMessage=  signal('');


_authService=inject(AuthService)
router=inject(Router)


loginform:FormGroup=new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
})

login(){
this.errorMessage.set('')

  this._authService.login(this.loginform.value).subscribe({

    next:(res)=>{
       const response = res as unknown as ErrorResponse;;
      
      if (response?.error?.message) {
        this.errorMessage.set(response.error.message)
      }
    }
  })
}

}
