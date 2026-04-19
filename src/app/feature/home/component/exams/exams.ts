import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Exam, diplomas } from '../../models/home.interface';
import { Homeservice } from '../../services/homeservice';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-exams',
  imports: [RouterLink],
  templateUrl: './exams.html',
  styleUrl: './exams.css',
})
export class Exams {
  private route = inject(ActivatedRoute);
  private homeservice = inject(Homeservice);
  private platformId = inject(PLATFORM_ID);
  diplomaName : string = '' 
  


  allExams: Exam[] = [];

  getExams() {
    const diplomaId = this.route.snapshot.params['id']; 
    this.homeservice.getExams(diplomaId).subscribe({
      next: (res) => {
        this.diplomaName=history.state?.dimplomaName || '' 
        this.homeservice.diplomaName.set(history.state?.dimplomaName || '') 
        console.log(res) 
      this.allExams = res.payload.data },
      error: (err) => { console.log(err) }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getExams();
    }
  }
}
