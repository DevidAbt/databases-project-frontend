import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

import { StudentService } from 'src/app/services/student.service'
import { StudentModel } from 'src/app/models/student'
import { StudentRequest } from 'src/app/requests/StudentRequest';
import { Button } from 'src/app/enums/button';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @ViewChild('f') studentForm: NgForm;
  currentClass = 1;
  students: StudentModel[];
  displayedColumns: string[] = ['nev', 'diakig', 'szul_datum', 'iranyitoszam', 'utca', 'hazszam'];
  emptyStudent: StudentModel = {diakig: null, hanyadikos: 1, nev: '', szul_datum: null, hazszam: null, utca: '', iranyitoszam: null};
  currnetStudent: StudentModel = this.emptyStudent;
  button: Button;

  constructor(private _service: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this._service.getStudentsOfClass(this.currentClass).subscribe(result=>{
      this.students = result;
    });
  }

  setCurrentClass(num: number){
    this.clearFields();
    this.currentClass = num;
    this.getStudents();
  }

  onStudentClick(student: StudentModel){
    this.currnetStudent = student;
  }

  clearFields(){
    this.currnetStudent = this.emptyStudent;
  }

  submitStudentForm(){
    const student = new StudentRequest(this.studentForm.value);
    student.hanyadikos = this.currentClass;
    switch(this.button){
      case "ADD":
        this._service.addStudent(student).subscribe();
        break;
      case "UPDATE":
        this._service.updateStudent(this.currnetStudent.diakig, student).subscribe();
        break;
      case "REMOVE":
        this._service.removeStudent(this.currnetStudent.diakig).subscribe();
        break;
    }
    this.clearFields();
    this.getStudents();
  }

  onButtonClick(type: string){
    switch (type) {
      case "ADD":
        this.button = Button.ADD;
        break;
      case "UPDATE":
        this.button = Button.UPDATE;
        break;
      case "REMOVE":
        this.button = Button.REMOVE;
        break;
    }
  }
}
