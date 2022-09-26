import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface userData {
  srNo: number;
  name: string;
  email: string;
  contact: number;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  usersData: userData[] = [
    { srNo: 1, name: 'Aanya', email: 'aanya@gmail.com', contact: 874532456, status: true },
  { srNo: 2, name: 'Niti', email: 'nititay@gmail.com', contact: 874532456, status: true },
  { srNo: 3, name: 'Nakuul', email: 'noxmehta@gmail.com', contact: 874532456, status: true },
  { srNo: 4, name: 'Ram', email: 'mrgenious@gmail.com', contact: 874532456, status: false },
  { srNo: 5, name: 'Pihu', email: 'pihurk@gmail.com', contact: 874532456, status: true },
  { srNo: 6, name: 'Disha', email: 'disharv@gmail.com', contact: 874532456, status: false },
  { srNo: 7, name: 'Priya', email: 'mssood@gmail.com', contact: 874532456, status: false },
  {
    srNo: 8, name: 'Aaditya', email: 'aadikumar@gmail.com', contact: 874532456, status: false},
  ];
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post('http://localhost:3600/form/signup', data);
  }
  login(data: any): Observable<any> {
    return this.http.post('http://localhost:3600/form/login', data);
  }
  getUser() {
    return this.usersData;
  }
  // getContactedUser() {}
  addNewStudent(student: userData) {
    this.usersData.push(student);
  }
  deleteRow(i: number) {
    this.usersData.splice(i, 1);
    return this.getUser();
  }
}
