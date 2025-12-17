import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-contact',
  imports: [FormsModule],
  templateUrl: './admin-contact.html',
  styleUrl: './admin-contact.css',
})
export class AdminContact {

  name = '';
  email = '';
  message = '';

  contact: any[] = [];
  editIndex: number | null = null;

  add() {
    if (this.editIndex === null) {
      // Add New
      this.contact.push({
        name: this.name,
        email: this.email,
        message: this.message
      });
    } else {
      // Update
      this.contact[this.editIndex] = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      this.editIndex = null;
    }

    // Clear inputs
    this.name = '';
    this.email = '';
    this.message = '';
  }

  edit(index: number) {
    this.name = this.contact[index].name;
    this.email = this.contact[index].email;
    this.message = this.contact[index].message;
    this.editIndex = index;
  }

  delete(index: number) {
    this.contact.splice(index, 1);
  }
}
