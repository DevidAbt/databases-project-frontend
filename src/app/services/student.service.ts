import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { StudentRequest } from '../requests/StudentRequest';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http : HttpService) {}

  getStudentsOfClass(classOfStudents: number): Observable<any> {
    return this._http.request(Resource.STUDENTS, Request.GET, null, classOfStudents.toString());
  }

  addStudent(student: StudentRequest){
    return this._http.request(Resource.STUDENTS, Request.POST, student, student.diakig.toString());
  }

  updateStudent(studentId: string, student: StudentRequest){
    return this._http.request(Resource.STUDENTS, Request.PUT, student, studentId);
  }

  removeStudent(studentId: string){
    return this._http.request(Resource.STUDENTS, Request.DELETE, null, studentId);
  }
}
