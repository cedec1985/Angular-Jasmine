import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CounterApiService {
  constructor(private http: HttpClient) {}

  public saveCounter(counter: number): Observable<{}> {
    return this.http.get(`/assets/counter.json?counter=${counter}`);
  }
  apiUrl = "http://www.localhost:5500";
  public sendFormData (data:{}):Observable<any>{
    return this.http.post(this.apiUrl,data)
  }
}
