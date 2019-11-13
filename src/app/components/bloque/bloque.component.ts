import { Component, OnInit } from '@angular/core';
import { ListFacultyService } from '../../services/list-faculty.service'
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import {Bloque}
@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {
  faculties;
  public form: DynamicFormGroup<Soli>;
  constructor(private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.listFacultyService.list().subscribe(res => {
      this.faculties = res;
    })
  }

}
