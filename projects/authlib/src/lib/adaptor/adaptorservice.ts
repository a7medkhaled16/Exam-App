import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adapt';

@Injectable({
  providedIn: 'root',
})
export class Adaptorservice implements Adaptor {

  adapt(data: any) {
    return {
      message:data.message,
      token:data.token
    }
  }
  
}
