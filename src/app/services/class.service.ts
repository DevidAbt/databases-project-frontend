import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private _http : HttpService) {}

  getAllClasses(): Observable<any> {
    return this._http.request(Resource.CLASSES, Request.GET, null, '');
  }
}
