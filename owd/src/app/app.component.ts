import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'owd';
  // uname = 'prachi';
  // ucolor = 'yellow';
  // apply = "a b c d";
  uname="ytyf";
  iname="ugy";
  but (val:any){
    this.iname=val
  }
  
  


  // but(val:any) {
  //   this.iname=val
  //   console.log(val)


    // prompt('Hello')
  // }

}


