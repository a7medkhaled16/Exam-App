import { Component } from '@angular/core';

interface Feature {
  icon: 'diploma' | 'exam' | 'form';
  title: string;
  description: string;
}

@Component({
  selector: 'app-static-side',
  imports: [],
  templateUrl: './static-side.html',
  styleUrl: './static-side.css',
})
export class StaticSide {

readonly features: Feature[] = [
    {
      icon: 'diploma',
      title: 'Tailored Diplomas',
      description:
        'Choose from specialized tracks like Frontend, Backend, and Mobile Development.',
    },
    {
      icon: 'exam',
      title: 'Focused Exams',
      description:
        'Access topic-specific tests including HTML, CSS, JavaScript, and more.',
    },
    {
      icon: 'form',
      title: 'Smart Multi-Step Forms',
      description:
        'Choose from specialized tracks like Frontend, Backend, and Mobile Development.',
    },
  ];

}
