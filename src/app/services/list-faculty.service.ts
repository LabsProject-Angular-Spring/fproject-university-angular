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
  listLabs = () => {
    return this.http.get("http://localhost:10010/lab/list") // pETICIÓN GET
  }
  listBuilding = () => {
    return this.http.get("http://localhost:10010/building/list") // pETICIÓN GET
  }
}
