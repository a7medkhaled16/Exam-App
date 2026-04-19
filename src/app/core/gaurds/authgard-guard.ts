import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Authservice2 } from '../../feature/auth/services/authservice';

export const authgardGuard: CanActivateFn = (route, state) => {
const _authService=inject(Authservice2)
const router=inject(Router)

if(_authService.islogged()){
    return true
  }
  router.navigate(['/login'])
  return false;
};
