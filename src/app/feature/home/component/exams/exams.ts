import { Component } from '@angular/core';

@Component({
  selector: 'app-exams',
  imports: [],
  templateUrl: './exams.html',
  styleUrl: './exams.css',
})
export class Exams {
  exams = [
    { title: 'HTML Exam', short: 'HTML', color: '#e34c26', questions: 25, minutes: 20, desc: 'Build the backbone of the web with HTML...' },
    { title: 'CSS Exam', short: 'CSS', color: '#264de4', questions: 25, minutes: 20, desc: 'Unlock the power of Cascading Style Sheets...' },
    { title: 'JavaScript Exam', short: 'JS', color: '#f7df1e', questions: 25, minutes: 20, desc: 'Bring your web pages to life with JavaScript...' },
    { title: 'React Exam', short: 'Re', color: '#61dafb', questions: 25, minutes: 20, desc: 'Dive into React, the industry-leading JS library...' },
    { title: 'Angular Exam', short: 'Ng', color: '#dd0031', questions: 75, minutes: 20, desc: 'Master Angular, Google\'s comprehensive framework...' },
    { title: 'Vue Exam', short: 'Vue', color: '#42b883', questions: 25, minutes: 20, desc: 'Discover Vue.js – the progressive JS Framework...' },
  ];
}
