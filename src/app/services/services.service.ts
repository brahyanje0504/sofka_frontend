import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData, Spacecraft } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = "http://127.0.0.1:3000";
  
  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  GetAll(): Observable<HttpResponse<ResponseData>>{
    return this.http.get<ResponseData>(`${this.url}/spaceships`, {observe: 'response'})
  }

  Save(data: Spacecraft): Observable<HttpResponse<ResponseData>>{
    return this.http.post<ResponseData>(`${this.url}/spaceships/create`,  data, { headers: this.httpOptions.headers, observe: 'response' } 
  );
  }

  GetCountries(): Observable<HttpResponse<ResponseData>>{
    return this.http.get<ResponseData>(`${this.url}/spaceships/countries`, {observe: 'response'})
  }

  GetFuels(): Observable<HttpResponse<ResponseData>>{
    return this.http.get<ResponseData>(`${this.url}/spaceships/fuels`, {observe: 'response'})
  }

}
