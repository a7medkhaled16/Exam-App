import { Component } from '@angular/core';

@Component({
  selector: 'app-answers',
  imports: [],
  templateUrl: './answers.html',
  styleUrl: './answers.css',
})
export class Answers {
reviewQuestions = [
    { question: 'What does CSS stand for?', wrong: 'Computer Style Sheets', correct: 'Cascading Style Sheets' },
    { question: 'What does CSS stand for?', wrong: 'Computer Style Sheets', correct: 'Cascading Style Sheets' },
    { question: 'What does CSS stand for?', wrong: 'Computer Style Sheets', correct: 'Cascading Style Sheets' },
  ];
}
