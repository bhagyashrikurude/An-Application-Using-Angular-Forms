import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
// import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private student: StudentService) {}
  // model = new Login( this.username, this.password );
  ngOnInit(): void {}
  onLogin(ngform: NgForm) {
    console.log(ngform.value);
    const data = ngform.value;
    this.student.login(data).subscribe(
      (res) => {
        alert('Login Successful');
      },
      (err) => {
        alert('Error while Login');
      }
    );
  }
  // login() {
  //   const data = this.loginForm.value;
  //   this.student.login(data).subscribe(
  //     (res) => {
  //       alert('Login Successful');
  //     },
  //     (err) => {
  //       alert('Error while Login');
  //     }
  //   );
  // }
}
