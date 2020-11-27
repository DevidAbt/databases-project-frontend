import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { LessonRequest } from '../requests/LessonRequest';
import { RoomModel } from '../models/room';



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

  getRoomNumbers(): Observable<any> {
    return this._http.request(Resource.ROOMS, Request.GET, null, 'numbers');
  }

  getSubjectCodesByClass(classOfSubjects: number): Observable<number[]> {
    return this._http.request(Resource.SUBJECTS, Request.GET, null, `${classOfSubjects}/codes`);
  }

  addLesson(lesson: LessonRequest): Observable<number[]> {
    return this._http.request(Resource.LESSONS, Request.POST, lesson, ``);
  }

  updateLesson(lesson: LessonRequest): Observable<number[]> {
    return this._http.request(Resource.LESSONS, Request.PUT, lesson, ``);
  }

  removeLesson(lesson: LessonRequest): Observable<number[]> {
    return this._http.request(Resource.LESSONS, Request.DELETE, lesson, ``);
  }
}
