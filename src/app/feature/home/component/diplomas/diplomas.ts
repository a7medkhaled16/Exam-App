import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Homeservice } from '../../services/homeservice';
import { isPlatformBrowser } from '@angular/common';
import { Daum } from '../../models/home.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-diplomas',
  imports: [RouterLink],
  templateUrl: './diplomas.html',
  styleUrl: './diplomas.css',
})
export class Diplomas {
allDimplomas:Daum[]=[]
 private homeservice = inject(Homeservice)
 private platformId = inject(PLATFORM_ID);
 getDiplomas(){
  this.homeservice.getDimplomas().subscribe({
    next:(res)=>{
      this.allDimplomas=res.payload.data
      console.log(res)},
    error:(err)=>{console.log(err)}
  })
 }
ngOnInit():void{
   if (isPlatformBrowser(this.platformId)) {
      this.getDiplomas();
    }
  
}
}
