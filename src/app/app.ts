import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { MiddleContent } from './middle-content/middle-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})
export class App {
  protected readonly title = signal('myfirstapp');
}
