import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Homeservice } from '../../services/homeservice';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

homeService=inject(Homeservice)


  userName = signal('')
  email = signal('')

   ngOnInit(): void {
    this.userName.set(this.homeService.userName())
    this.email.set(this.homeService.email())
   }

}
