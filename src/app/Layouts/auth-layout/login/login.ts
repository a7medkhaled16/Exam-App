import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [PasswordModule,RouterLink,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
value:string=''
}
