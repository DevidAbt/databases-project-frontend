import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student.service'
import { StudentModel } from 'src/app/models/student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  currentClass = 1;
  students: StudentModel[];
  displayedColumns: string[] = ['nev', 'szul_datum', 'iranyitoszam', 'utca', 'hazszam'];

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
    this.currentClass = num;
    this.getStudents();
  }

  onStudentClick(student: StudentModel){
    console.log(student.nev);
  }
}
