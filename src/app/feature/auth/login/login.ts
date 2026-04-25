import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../../dist/authlib';
import { Validation } from '../../../shared/component/validation/validation';
import { Errorbanner } from "../errorbanner/errorbanner";
import { Authservice2 } from '../services/authservice';
import { Homeservice } from '../../home/services/homeservice';


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
authService=inject(Authservice2)
homeService=inject(Homeservice)
router=inject(Router)


loginform:FormGroup=new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
})

login(){
this.errorMessage.set('')

  this._authService.login(this.loginform.value).subscribe({

    next:(res)=>{
      this.authService.saveToken(res.payload.token)
      this.homeService.userName.set(res.payload.user.username)
      this.homeService.email.set(res.payload.user.email)
      this.router.navigate(['/main']);
      
    },
  error:(err)=>{
    this.errorMessage.set(err.error.message)
   }
  })
}

}
