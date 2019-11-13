import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListFacultyService {

  constructor(private http: HttpClient) { }
  list = () => {
    return this.http.get("http://localhost:10010/faculty/list") // pETICIÓN GET
  }
}
