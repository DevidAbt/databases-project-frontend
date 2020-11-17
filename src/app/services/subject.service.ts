import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { SubjectRequest } from '../requests/SubjectRequest';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http : HttpService) {}

  getSubjectsOfClass(classOfStudents: number): Observable<any> {
    return this._http.request(Resource.SUBJECTS, Request.GET, null, classOfStudents.toString());
  }

  addSubject(subject: SubjectRequest){
    return this._http.request(Resource.SUBJECTS, Request.POST, subject);
  }

  updateSubject(subjectId: number, subject: SubjectRequest){
    return this._http.request(Resource.SUBJECTS, Request.PUT, subject, subjectId.toString());
  }

  removeSubject(subjectId: number){
    return this._http.request(Resource.SUBJECTS, Request.DELETE, null, subjectId.toString());
  }
}
