import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../dist/authlib';



@Component({
  selector: 'app-login',
  imports: [PasswordModule,RouterLink,RouterModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
value:string=''

_authService=inject(AuthService)
router=inject(Router)


loginform:FormGroup=new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
})

login(){
  this._authService.login(this.loginform.value).subscribe({
    next:(res)=>{console.log(res)
      // this.router.navigate(['/auth/info']);
    },
  error:(err)=>{console.log(err)}
  })
}

}
