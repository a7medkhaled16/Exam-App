import { Component } from '@angular/core';
import { Sidebar } from "../../../../feature/home/component/sidebar/sidebar";
import { Diplomas } from "../../../../feature/home/component/diplomas/diplomas";
import { Exams } from "../../../../feature/home/component/exams/exams";
import { Questions } from "../../../../feature/home/component/questions/questions";
import { Answers } from "../../../../feature/home/component/answers/answers";

@Component({
  selector: 'app-mainlayout',
  imports: [Sidebar, Diplomas, Exams, Questions, Answers],
  templateUrl: './mainlayout.html',
  styleUrl: './mainlayout.css',
})
export class Mainlayout {
 sidebarOpen = false;
}
