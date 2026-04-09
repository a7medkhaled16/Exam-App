import { Component, inject, signal } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../dist/authlib';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validation } from "../../shared/component/validation/validation";


@Component({
  selector: 'app-new-password',
  imports: [PasswordModule, ReactiveFormsModule, RouterLink, Validation],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {

token:string =''
  errorMessage=  signal('');
  succesMessage=  signal('');

  
private readonly _authService=inject(AuthService)
private readonly router=inject(Router)
private readonly activatedRoute = inject(ActivatedRoute)

ngOnInit(){
this.activatedRoute.queryParams.subscribe({
  next:(params)=>{
this.token = params['token'] ?? ''
  }
})
}

resetpassform:FormGroup=new FormGroup({
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  newpassword:new FormControl('',[Validators.required])
},{validators:this.repasswordmatch})

repasswordmatch(control:AbstractControl){
   return control.get('password')?.value === control.get('newpassword')?.value
    ?null:{mismatch:true}
  }


newpassword(){
  const data={
  token:this.token,
  newPassword: this.resetpassform.value.password,
  confirmPassword: this.resetpassform.value.newpassword
}
  this._authService.resetpassword(data).subscribe({
    next:(res)=>{console.log(res)
      // this.router.navigate(['/auth/restmassege']);
    this.succesMessage.set(res.message)

    },
  error:(err)=>{
    this.errorMessage.set(err.error.message)
    console.log('error',err)
   }
  })
}


}
