import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CounterApiService {

  private apiUrl = 'https://exemple.com/lander';

  envoyerFormulaire(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  constructor(private http: HttpClient) {}

  public saveCounter(counter: number): Observable<{}> {
    return this.http.get(`/assets/counter.json?counter=${counter}`);
  }
}
