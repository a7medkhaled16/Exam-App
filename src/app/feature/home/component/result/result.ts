import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { SubmissionResult } from '../../models/home.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Homeservice } from '../../services/homeservice';
import { isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-result',
  imports: [ChartModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private homeservice = inject(Homeservice);
  private platformId = inject(PLATFORM_ID);
  examName:string=''
  diplomasName:string=''

  result: SubmissionResult | null = null;

  get correctPercent(): number {
    if (!this.result) return 0;
    return (this.result.payload.submission.correctAnswers / this.result.payload.submission.totalQuestions) * 100;
  }

  get wrongPercent(): number {
    if (!this.result) return 0;
    return (this.result.payload.submission.wrongAnswers / this.result.payload.submission.totalQuestions) * 100;
  }

  get wrongOffset(): string {
    return `-${this.correctPercent}`;
  }

  restart(): void {
    this.router.navigate(['/main/questions', this.result?.payload.submission.examId]);
  }

  explore(): void {
    this.router.navigate(['/main/diplomas']);
  }

    chartData: any = null;
  chartOptions: any = {
    cutout: '70%',
    plugins: {
      legend: { display: false }
    }
  };

   // بيعمل الـ chart data بعد ما البيانات تيجي
  buildChart(): void {
    if (!this.result) return;
    this.chartData = {
      datasets: [{
        data: [
          this.result.payload.submission.correctAnswers,
          this.result.payload.submission.wrongAnswers
        ],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderWidth: 0
      }]
    };
  }

  getResult(): void {
    const id = this.route.snapshot.params['id'];
    this.homeservice.getSubmission(id).subscribe({
      next: (res) => {
        this.diplomasName = this.homeservice.diplomaName()
        this.examName=this.homeservice.examName()
         this.result = res 
        this.buildChart();
      },
      error: (err) => { console.log(err) }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getResult();
    }
  }
}
