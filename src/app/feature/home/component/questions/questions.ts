import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Homeservice } from '../../services/homeservice';
import { Question, SubmissionResult, diplomas } from '../../models/home.interface';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-questions',
  imports: [CommonModule, RouterLink],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {
  private route = inject(ActivatedRoute);
  private homeservice = inject(Homeservice);
   private platformId = inject(PLATFORM_ID);
router=inject(Router)


  allQuestions: Question[] = [];
  currentIndex: number = 0;
  selectedAnswers: { [questionId: string]: string } = {}; // ← بيحفظ كل الإجابات
  startedAt: string = new Date().toISOString();
  result: SubmissionResult | null = null;
  showResults: boolean = false;
  diplomaName:string=''
  examName:string=''
  examId:string=''

  get currentQuestion(): Question {
    return this.allQuestions[this.currentIndex];
  }

  get totalQuestions(): number {
    return this.allQuestions.length;
  }

  // ← بيجيب الإجابة المختارة للسؤال الحالي بس
  get selectedAnswerId(): string | null {
    return this.selectedAnswers[this.currentQuestion?.id] || null;
  }

  get isLastQuestion(): boolean {
    return this.currentIndex === this.totalQuestions - 1;
  }

  get allAnswered(): boolean {
    return this.allQuestions.every(q => this.selectedAnswers[q.id]);
  }

  // ← بيحفظ الإجابة بالـ questionId
  selectAnswer(answerId: string): void {
    this.selectedAnswers[this.currentQuestion.id] = answerId;
  }

   returnBack(): void {
    this.router.navigate(['/main/exams', this.examId]);
  }

  next(): void {
    if (this.currentIndex < this.totalQuestions - 1) {
      this.currentIndex++; // ← مفيش مسح للإجابة
    }
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--; // ← مفيش مسح للإجابة
    }
  }

  submitExam(): void {
     if (!isPlatformBrowser(this.platformId)) return;
    const examId = this.route.snapshot.params['id'];
    const answers = Object.entries(this.selectedAnswers).map(
      ([questionId, answerId]) => ({ questionId, answerId })
    );
    this.homeservice.submitExam({ examId, answers, startedAt: this.startedAt })
      .subscribe({
        next: (res) => {
          console.log(res)
          this.result = res;
          this.showResults = true;
      this.router.navigate(['/main/result', res.payload.submission.id]);
        },
        error: (err) => { console.log(err) }
      });
  }

  getQuestions(): void {
    const examId = this.route.snapshot.params['id'];
    this.homeservice.getQuestions(examId).subscribe({
      next: (res) => { 
        this.diplomaName = this.homeservice.diplomaName()
        this.examName = history.state?.examName || ''
        console.log(res)
        this.allQuestions = res.payload.questions },
      error: (err) => { console.log(err) }
    });
  }

  ngOnInit(): void {
     this.examId=this.homeservice.examId()
    if (isPlatformBrowser(this.platformId)) {
    this.getQuestions();


    }
  }
}