import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
// import { Addinquiry } from '../interfaces/addinquiry';
@Component({
  selector: 'app-addinquiry',
  templateUrl: './addinquiry.component.html',
  styleUrls: ['./addinquiry.component.css'],
})
export class AddinquiryComponent implements OnInit {
  inquiryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.inquiryForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      college: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.studentService.addNewStudent(this.inquiryForm.value);
    // console.log(this.inquiryForm.value);
    this.router.navigate(['/inquiries']);
  }
}
