import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  imports: [RouterLink],
  templateUrl: './pagenotfound.html',
  styleUrl: './pagenotfound.css',
})
export class Pagenotfound {
  constructor(private router :Router){}
  gotomiddlecontent()
  {
    this.router.navigate(['/middlecontent'])
  }
}


