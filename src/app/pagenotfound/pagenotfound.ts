import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  imports: [],
  templateUrl: './pagenotfound.html',
  styleUrl: './pagenotfound.css',
})
export class Pagenotfound {
  constructor(private router :Router){}
  // protected readonly router = inject(Router);
  gotomiddlecontent()
  {
    this.router.navigate(['/middlecontent'])
  }
}


