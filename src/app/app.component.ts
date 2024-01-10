import { Component, OnInit } from '@angular/core';
import { StudentService } from '../app/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  student = {
    firstName: '',
    lastName: '',
    gender: '',
    previousSchool: '',
    previousClass: '',
    previousClassName: '',
    mobileNumber: '',
    parentMobileNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    email: '',
    previousGrades: '',
    favouriteSubject: ''
  };

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  onSubmit() {
    this.studentService.saveStudent(this.student);
    this.students = this.studentService.getStudents(); // Update the list
    this.clearForm();
  }

  clearForm() {
    this.student = {
      firstName: '',
      lastName: '',
      gender: '',
      previousSchool: '',
      previousClass: '',
      previousClassName: '',
      mobileNumber: '',
      parentMobileNumber: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      email: '',
      previousGrades: '',
      favouriteSubject: ''
    };
  }
}
