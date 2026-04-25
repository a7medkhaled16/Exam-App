import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { enviroment } from '../../../../environment/environment.prod';
import { Observable } from 'rxjs';
import { diplomas, Examss, Questionss, SubmissionResult, SubmitExam } from '../models/home.interface';


@Injectable({
  providedIn: 'root',
})
export class Homeservice {
  constructor(private httpclient : HttpClient){}

  getDimplomas():Observable<diplomas>{
  return this.httpclient.get<diplomas>(
    `${enviroment.baseUrl}api/diplomas`
  )
  }
  
  getExams(diplomaId: string): Observable<Examss> {
  return this.httpclient.get<Examss>(
    `${enviroment.baseUrl}api/exams?diplomaId=${diplomaId}`
  );
}

getQuestions(examId: string): Observable<Questionss> {
  return this.httpclient.get<Questionss>(
    `${enviroment.baseUrl}api/questions/exam/${examId}`
  );
}

submitExam(body: SubmitExam): Observable<SubmissionResult> {
  return this.httpclient.post<SubmissionResult>(
    `${enviroment.baseUrl}api/submissions`, body
  );
}

getSubmission(id: string): Observable<SubmissionResult> {
  return this.httpclient.get<SubmissionResult>(
    `${enviroment.baseUrl}api/submissions/${id}`
  );
}

email = signal('');
userName = signal('');
diplomaName = signal('');
examName = signal('');
examId = signal('')


} 
