import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaticSide } from '../../../../feature/auth/static-side/static-side';


@Component({
  selector: 'app-auth',
  imports: [StaticSide,RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})  
export class Auth {

}
