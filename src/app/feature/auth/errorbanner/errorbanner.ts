import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errorbanner',
  imports: [],
  templateUrl: './errorbanner.html',
  styleUrl: './errorbanner.css',
})
export class Errorbanner {
@Input() errorMessage!:string
}
