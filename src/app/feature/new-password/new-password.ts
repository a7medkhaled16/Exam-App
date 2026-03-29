import { Component, inject } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../dist/authlib';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-password',
  imports: [PasswordModule,ReactiveFormsModule,RouterLink],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {

token:string =''
  
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
  password:new FormControl(''),
  newpassword:new FormControl('')
})



newpassword(){
  const data={
  token:this.token,
  newPassword: this.resetpassform.value.password,
  confirmPassword: this.resetpassform.value.newpassword
}
  this._authService.resetpassword(data).subscribe({
    next:(res)=>{console.log(res)
      // this.router.navigate(['/auth/restmassege']);
    },
  error:(err)=>{console.log(err)}
  })
}


}
