import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../dist/authlib';


@Component({
  selector: 'app-forget-password',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {


  
_authService=inject(AuthService)
router=inject(Router)


forgetform:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email])
})

forgetpassword(){
  this._authService.forgetpassword(this.forgetform.value).subscribe({
    next:(res)=>{console.log(res)
      this.router.navigate(['/auth/restmassege']);
    },
  error:(err)=>{console.log(err)}
  })
}


}
