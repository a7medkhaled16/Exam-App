import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {
 options = [
    'Computer Style Sheets',
    'Creative Style Sheets',
    'Cascading Style Sheets',
    'Colorful Style Sheets',
  ];
}
