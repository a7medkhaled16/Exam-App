import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-creat-account',
  imports: [RouterLink,PasswordModule],
  templateUrl: './creat-account.html',
  styleUrl: './creat-account.css',
})
export class CreatAccount {

}
