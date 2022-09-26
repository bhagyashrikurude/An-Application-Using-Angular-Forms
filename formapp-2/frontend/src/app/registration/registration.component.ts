import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private student: StudentService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}
  register() {
    // console.log(this.registerForm.value);
    // delete data ['for eg:- name']
    const data = this.registerForm.value;
    this.student.register(data).subscribe(
      (res) => {
        alert('Registration Successful');
      },
      (err) => alert('Error while registering')
    );
  }
}
