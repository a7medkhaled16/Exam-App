import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Registerservice } from '../../services/registerservice';
import { Router } from '@angular/router';
import { log } from 'console';


@Component({
  selector: 'app-accountinfo',
  imports: [ReactiveFormsModule],
  templateUrl: './accountinfo.html',
  styleUrl: './accountinfo.css',
})
export class Accountinfo {

registerservice=inject(Registerservice)
router=inject(Router)


infoform:FormGroup=new FormGroup({
  firstname:new FormControl(''),
  lastname:new FormControl(''),
  username:new FormControl(''),
  phone:new FormControl(''),
})

submiteinfo(){

      this.router.navigate(['/auth/accountpass']);
      this.registerservice.firstname=this.infoform.value.firstname
      this.registerservice.lastname=this.infoform.value.lastname
      this.registerservice.username=this.infoform.value.username
      this.registerservice.phone=this.infoform.value.phone
      console.log( this.registerservice.firstname,
      this.registerservice.lastname,
      this.registerservice.username,
      this.registerservice.phone);
}

}
