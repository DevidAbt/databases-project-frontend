import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from '../enums/resource';
import { Request } from '../enums/request';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
    // this.baseUrl = baseUrl;
  }

  request(resource: Resource, method: Request, payload: any, id: string = ''): Observable<any> {
    const apiURL = this.baseUrl + 'api/' + resource + id;

    let options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    if (payload) {
      options = Object.assign(options, {body: payload});
    }

    return this.http.request(method, apiURL, options);
  }
}
