import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListFacultyService {

  constructor(private http: HttpClient) { }
  list = () => {
    return this.http.get("http://localhost:10060/faculty/list") // pETICIÓN GET
  }
  listLabs = () => {
    return this.http.get("http://localhost:10060/lab/list") // pETICIÓN GET
  }
  listBuilding = () => {
    return this.http.get("http://localhost:10060/building/list") // pETICIÓN GET
  }

  save = (model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post("http://localhost:10060/building/add", model, { responseType: 'text'} )
  }

  saveFaculty = (model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post("http://localhost:10060/faculty/add", model, { responseType: 'text' })
  }

  saveLab = (model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post("http://localhost:10060/lab/add", model, { responseType: 'text' })

  }

}
