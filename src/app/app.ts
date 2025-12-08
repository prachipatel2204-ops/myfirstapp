import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.html',
  //styleUrl: './app.css'
  template:`<h1>Hello</h1> <h2>Hi</h2>`,
  styles:`h1{color:blue;font-size:80px} h2{color:green;font-size:70px}`
})
export class App {
  protected readonly title = signal('myfirstapp');
}
