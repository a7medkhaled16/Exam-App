import { Component } from '@angular/core';
import { StaticSide } from "../static-side/static-side";
import { NewPassword } from "../new-password/new-password";

@Component({
  selector: 'app-new-pass-layout',
  imports: [StaticSide, NewPassword],
  templateUrl: './new-pass-layout.html',
  styleUrl: './new-pass-layout.css',
})
export class NewPassLayout {

}
