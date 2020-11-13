import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http : HttpService) {}

  getStudentsOfClass(classOfStudents: number): Observable<any> {
    return this._http.request(Resource.STUDENTS, Request.GET, null, classOfStudents.toString());
  }
}
