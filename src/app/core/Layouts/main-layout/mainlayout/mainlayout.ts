import { Component } from '@angular/core';
import { Sidebar } from "../../../../feature/home/component/sidebar/sidebar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-mainlayout',
  imports: [Sidebar, RouterModule],
  templateUrl: './mainlayout.html',
  styleUrl: './mainlayout.css',
})
export class Mainlayout {
 sidebarOpen = false;
}
