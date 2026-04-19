import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { Authservice2 } from '../../feature/auth/services/authservice';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const authService = inject(Authservice2);

  const requiresAuth = req.url.includes('diplomas') 
    || req.url.includes('exams') 
    || req.url.includes('questions')
    || req.url.includes('answer')
    || req.url.includes('submissions');

  if (requiresAuth && isPlatformBrowser(platformId)) {
    req = req.clone({
      setHeaders: {
  Authorization: `Bearer ${authService.gettoken()}`
}
    });
  }

  return next(req).pipe(
    catchError((err) => {
      return throwError(() => err);
    })
  );
};