import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-contact',
  imports: [FormsModule],
  templateUrl: './admin-contact.html',
  styleUrl: './admin-contact.css',
})
export class AdminContact {
protected name="Contact Page"
protected username?:String;
protected studname=signal("Patel Prachi");
imageUrl="images/reg.jpg"
}
