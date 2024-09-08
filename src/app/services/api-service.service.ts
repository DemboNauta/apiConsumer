import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  response: any;
  responseSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getData(endpoint: string, method: string, apiKey?: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (apiKey) {
      headers.append('Authorization', `Bearer ${apiKey}`);
    }

    this.http.request(method, endpoint, { headers: headers }).subscribe((res)=>{
      this.response = res;
      this.responseSubject.next(res);
    });
  }
}
