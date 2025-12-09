import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { MiddleContent } from './middle-content/middle-content';
import { About } from './about/about';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer,MiddleContent,About], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstapp');
}
