import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../../../dist/authlib';
import { Registerservice } from '../../services/registerservice';



@Component({
  selector: 'app-creat-account',
  imports: [ReactiveFormsModule],
templateUrl: './creat-account.html',
  styleUrl: './creat-account.css',
})
export class CreatAccount {

_authService=inject(AuthService)
registerservice=inject(Registerservice)
router=inject(Router)

emailform :FormGroup= new FormGroup({
  email:new FormControl('')
})

sendVerify(){
  this.registerservice.email=this.emailform.value.email
this._authService.sendverifiy(this.emailform.value).subscribe({
  next:(res)=>{
    console.log(res)
    this.router.navigate(['/auth/otp']);
  },
  error:(err)=>{console.log(err)}
})



}

}
