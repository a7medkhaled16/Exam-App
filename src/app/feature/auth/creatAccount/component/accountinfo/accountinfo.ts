import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registerservice } from '../../services/registerservice';
import { Router } from '@angular/router';
import { Validation } from '../../../../../shared/component/validation/validation';


@Component({
  selector: 'app-accountinfo',
  imports: [ReactiveFormsModule, Validation],
  templateUrl: './accountinfo.html',
  styleUrl: './accountinfo.css',
})
export class Accountinfo {

registerservice=inject(Registerservice)
router=inject(Router)


infoform:FormGroup=new FormGroup({
  firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  username:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
  phone:new FormControl('',[Validators.required]),
})

submiteinfo(){

      this.router.navigate(['/auth/accountpass']);
      this.registerservice.firstname=this.infoform.value.firstname
      this.registerservice.lastname=this.infoform.value.lastname
      this.registerservice.username=this.infoform.value.username
      this.registerservice.phone=this.infoform.value.phone
     
}

}
