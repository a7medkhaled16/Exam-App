import { Component } from '@angular/core';

@Component({
  selector: 'app-diplomas',
  imports: [],
  templateUrl: './diplomas.html',
  styleUrl: './diplomas.css',
})
export class Diplomas {

  diplomas = [
    { title: 'Flutter Development', desc: 'Discover Flutter...', img: 'https://picsum.photos/seed/flutter/400/300' },
    { title: 'AI & ML Development', desc: 'Explore the frontiers...', img: 'https://picsum.photos/seed/ai/400/300' },
    { title: 'Back-End Web Development', desc: 'Become a professional...', img: 'https://picsum.photos/seed/backend/400/300' },
    { title: 'Data Analysis', desc: 'Become a professional...', img: 'https://picsum.photos/seed/data/400/300' },
    { title: 'Software Testing', desc: 'Become a professional...', img: 'https://picsum.photos/seed/testing/400/300' },
    { title: 'Cyber Security', desc: 'Become a professional...', img: 'https://picsum.photos/seed/cyber/400/300' },
  ];

}
