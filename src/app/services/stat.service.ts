import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { Request } from '../enums/request';
import { Resource } from '../enums/resource';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private _http: HttpService) {}

  getNumOfSubjectByTypesOfClass(classOfSubjects: number): Observable<any> {
    return this._http.request(Resource.STATS, Request.GET, null, `types/${classOfSubjects}`);
  }

  getNumOfSubjectByRoomsOfClass(classOfSubjects: number): Observable<any> {
    return this._http.request(Resource.STATS, Request.GET, null, `rooms/${classOfSubjects}`);
  }

  getBigRooms(): Observable<any> {
    return this._http.request(Resource.STATS, Request.GET, null, 'bigrooms');
  }
}
