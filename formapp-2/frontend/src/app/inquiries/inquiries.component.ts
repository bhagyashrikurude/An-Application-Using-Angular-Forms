// import { Component, OnInit } from '@angular/core';
// import { StudentService, userData } from '../student.service';

// @Component({
//   selector: 'app-inquiries',
//   templateUrl: './inquiries.component.html',
//   styleUrls: ['./inquiries.component.css'],
// })
// export class InquiriesComponent implements OnInit {
//   usersData: userData[] = [];
//   usersArray = this.usersData;
//   displayedColumns: string[] = ['srNo', 'name', 'email', 'contact'];

//   constructor(private studentService: StudentService) {}

//   ngOnInit(): void {
//     this.usersData = this.studentService.getUser();
//   }
//   deleteRow(i: number) {
//     this.studentService.deleteRow(i);
//     console.log(this.studentService.deleteRow(i));
//   }
// }

import { Component } from '@angular/core';

export interface userData {
  srNo: number;
  name: string;
  email: string;
  contact: number;
}

const usersData: userData[] = [
  { srNo: 1, name: 'Aanya', email: 'aanya@gmail.com', contact: 874532456 },
  { srNo: 2, name: 'Niti', email: 'nititay@gmail.com', contact: 874532456 },
  { srNo: 3, name: 'Nakuul', email: 'noxmehta@gmail.com', contact: 874532456 },
  { srNo: 4, name: 'Ram', email: 'mrgenious@gmail.com', contact: 874532456 },
  { srNo: 5, name: 'Pihu', email: 'pihurk@gmail.com', contact: 874532456 },
  { srNo: 6, name: 'Disha', email: 'disharv@gmail.com', contact: 874532456 },
  { srNo: 7, name: 'Priya', email: 'mssood@gmail.com', contact: 874532456 },
  { srNo: 8, name: 'Aaditya', email: 'aadikumar@gmail.com', contact: 874532456 },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css'],
})
export class InquiriesComponent {
  displayedColumns: string[] = ['srNo', 'name', 'email', 'contact', 'action'];
  usersArray = usersData;

  deleteData(i: number) {
    this.usersArray = this.usersArray.filter((element) => element.srNo !== i)
  }
}
