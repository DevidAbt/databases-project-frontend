import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

import { StudentService } from 'src/app/services/student.service'
import { StudentModel } from 'src/app/models/student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @ViewChild('f') studentForm: NgForm;

  currentClass = 1;
  students: StudentModel[];
  displayedColumns: string[] = ['nev', 'szul_datum', 'iranyitoszam', 'utca', 'hazszam'];
  emptyStudent: StudentModel = {hanyadikos: 1, nev: '', szul_datum: null, hazszam: null, utca: '', iranyitoszam: null};
  currnetStudent: StudentModel = this.emptyStudent;

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
    this.clearFileds();
    this.currentClass = num;
    this.getStudents();
  }

  onStudentClick(student: StudentModel){
    this.currnetStudent = student;
  }

  clearFileds(){
    this.currnetStudent = this.emptyStudent;
  }

  submitStudentForm(){
    console.log(this.studentForm);
  }
}
