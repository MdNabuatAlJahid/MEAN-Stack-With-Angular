import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Event } from './event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url: string = '/assets/db.json';
  params = new HttpParams();
  param = this.params.append('limit', '5');
  constructor(private http: HttpClient) {}
  getEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url, { params: this.param });
  }
}
