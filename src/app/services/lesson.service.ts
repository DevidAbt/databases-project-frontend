import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { LessonRequest } from '../requests/LessonRequest';



@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private _http: HttpService) {}

  getAllLessons(): Observable<any> {
    return this._http.request(Resource.LESSONS, Request.GET, null);
  }

  getLessonsByClassAndType(classOfSubjects: number, subjectType: string): Observable<any> {
    return this._http.request(Resource.LESSONS, Request.GET, null, `${classOfSubjects}/${subjectType}`);
  }

  getNumOfSubjectByTypesOfClass(classOfSubjects: number): Observable<any> {
    return this._http.request(Resource.LESSONS, Request.GET, null, `types/${classOfSubjects}`);
  }
}
