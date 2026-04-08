import { inject, Injectable } from '@angular/core';
import { authApi } from './base/authApi';
import { catchError, map, Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { authEndPoint } from './enums/authEndPoint';
import { Adaptorservice } from './adaptor/adaptorservice';
import {  confirmReq, registerReq, registerRes, resetpassReq, verifyRes } from './interfaces/authInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements authApi {

  private httpClient= inject(HttpClient)
  private adaptorservice= inject(Adaptorservice)

   sendverifiy(data: {email:'string'}): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.SendEmailVerification,data).pipe(catchError (err => of(err)))
  }

   confirmverifiy(data: confirmReq): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.ConfirmEmailVerification,data).pipe(catchError (err => of(err)))
  }

   register(data: registerReq): Observable<registerRes> {
    return this.httpClient.post<registerRes>(authEndPoint.Register,data)
  }

   login(data: registerReq): Observable<registerRes> {
    return this.httpClient.post<registerRes>(authEndPoint.LOGIN,data).pipe(catchError (err => of(err)))
  } 

   forgetpassword(data: {username:'string'}): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.ChangePassword,data)
  }

   resetpassword(data: resetpassReq): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.ResetPassword,data)
  }


  
}
