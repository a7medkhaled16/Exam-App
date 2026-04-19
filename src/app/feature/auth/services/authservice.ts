import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice2 {
  private platformId = inject(PLATFORM_ID);

  saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('savetoken', token);
    }
  }

  savename(name: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('name', name);
    }
  }

  gettoken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('savetoken');
    }
    return null;
  }

  islogged(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('savetoken');
    }
    return false;
  }
}
