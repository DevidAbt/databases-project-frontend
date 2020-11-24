import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

import { Request } from '../enums/request';
import { Resource } from '../enums/resource';
import { Week } from '../enums/week';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {


  constructor(private _http: HttpService) {
  }

  getTimetable(hanyadikos: Number, week: Week){
    var weeknumber: Number;
    if(week == Week.A){
      weeknumber = 1;
    }
    else{
      weeknumber = 0;
    }
    return this._http.request(Resource.TIMETABLE, Request.GET, null, `${hanyadikos}/${weeknumber}`);
  }
}
