import { Component, OnInit } from '@angular/core';
import { StudentService, userData } from '../student.service';

@Component({
  selector: 'app-contacted',
  templateUrl: './contacted.component.html',
  styleUrls: ['./contacted.component.css']
})
export class ContactedComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'name', 'email', 'contact', 'action'];
  usersData: userData[] = [];
  // usersArray = this.usersData;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.usersData = this.studentService.getUser();
  }

}
