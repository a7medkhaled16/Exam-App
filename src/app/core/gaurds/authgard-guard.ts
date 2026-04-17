import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'authlib';

export const authgardGuard: CanActivateFn = (route, state) => {
const _authService=inject(AuthService)
const router=inject(Router)

if(_authService.islogged()){
    return true
  }
  router.navigate(['/login'])
  return false;
};
