import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { RoomRequest } from '../requests/RoomRequest';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _http: HttpService) {}

  getRooms(): Observable<any>{
    return this._http.request(Resource.ROOMS, Request.GET, null, '');
  }

  addRoom(room: RoomRequest): Observable<any>{
    return this._http.request(Resource.ROOMS, Request.POST, room, '');
  }

  updateRoom(number: number, room: RoomRequest): Observable<any>{
    return this._http.request(Resource.ROOMS, Request.PUT, room, number.toString());
  }

  removeRoom(number: number): Observable<any>{
    return this._http.request(Resource.ROOMS, Request.DELETE, null, number.toString());
  }
}
