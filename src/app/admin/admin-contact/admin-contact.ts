import { CommonModule } from '@angular/common';
import {Component,OnInit,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-contact.html',
  styleUrl: './admin-contact.css',
})
export class AdminContact
  implements OnInit, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  name = '';
  email = '';
  message = '';

  contact: any[] = [];
  editIndex: number | null = null;

  // Called once when the component is created
ngOnInit() {
  console.log('AdminContact ngOnInit');
}

// Called every time Angular checks for changes
ngDoCheck() {
  console.log('AdminContact ngDoCheck');
}

// Called once after external content is loaded
ngAfterContentInit() {
  console.log('AdminContact ngAfterContentInit');
}

// Called every time after content is checked
ngAfterContentChecked() {
  console.log('AdminContact ngAfterContentChecked');
}

// Called once after component view and child views are loaded
ngAfterViewInit() {
  console.log('AdminContact ngAfterViewInit');
}

// Called every time after the view(html) is checked
ngAfterViewChecked() {
  console.log('AdminContact ngAfterViewChecked');
}

  add() {
    if (this.editIndex === null) {
      this.contact.push({
        name: this.name,
        email: this.email,
        message: this.message
      });
    } else {
      this.contact[this.editIndex] = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      this.editIndex = null;
    }

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
