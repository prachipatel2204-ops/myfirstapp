import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.html',
  //styleUrl: './app.css'
  template:`<marquee><h1>Hello✨</h1> <h2>Hi</h2> <h3>How Are You</h3> <h4>Fine</h4></marquee>`,
  styles:`h1{color:blue;font-size:80px} h2{color:green;font-size:70px} h3{color:red;font-size:60px} h4{color:yellow;font-size:50px}`
})
export class App {
  protected readonly title = signal('myfirstapp');
}
