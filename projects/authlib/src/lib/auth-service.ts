import { inject, Injectable } from '@angular/core';
import { authApi } from './base/authApi';
import { catchError, map, Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { authEndPoint } from './enums/authEndPoint';
import {  confirmReq, registerReq, registerRes, resetpassReq, verifyRes , VerifyOtp, forgetpass } from './interfaces/authInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements authApi {

  private httpClient= inject(HttpClient)

   sendverifiy(data: VerifyOtp): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.SendEmailVerification,data)
  }

   confirmverifiy(data: confirmReq): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.ConfirmEmailVerification,data)
  }

   register(data: registerReq): Observable<registerRes> {
    return this.httpClient.post<registerRes>(authEndPoint.Register,data)
  }

   login(data: registerReq): Observable<registerRes> {
    return this.httpClient.post<registerRes>(authEndPoint.LOGIN,data)
  } 

   forgetpassword(data: forgetpass): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.ChangePassword,data)
  }

   resetpassword(data: resetpassReq): Observable<verifyRes> {
    return this.httpClient.post<verifyRes>(authEndPoint.ResetPassword,data)
  }

   
  
}
