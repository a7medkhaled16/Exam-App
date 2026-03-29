import { Component, inject } from '@angular/core';
import { Password, PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../../../dist/authlib';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Registerservice } from '../../services/registerservice';


@Component({
  selector: 'app-accountpassword',
  imports: [PasswordModule,ReactiveFormsModule],
  templateUrl: './accountpassword.html',
  styleUrl: './accountpassword.css',
})
export class Accountpassword {

_authService=inject(AuthService)
registerservice=inject(Registerservice)
router=inject(Router)


passform:FormGroup=new FormGroup({
  password:new FormControl(''),
  confirmPassword:new FormControl('')
})



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
  error:(err)=>{console.log(err),err}
  })
}

}
