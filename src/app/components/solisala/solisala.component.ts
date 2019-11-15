import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Faculty} from '../../models/faculty';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';
import { ListFacultyService } from '../../services/list-faculty.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solisala',
  templateUrl: './solisala.component.html',
  styleUrls: ['./solisala.component.scss']
})
export class SolisalaComponent implements OnInit {
  public form: DynamicFormGroup<Faculty>;
  constructor(private fb: DynamicFormBuilder, private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.form = this.fb.group(Faculty, {
      name: '' });
  }
  save() {
    this.listFacultyService.saveFaculty(JSON.parse(JSON.stringify(this.form.object))).subscribe(res => {
      if (res == 'Saved')
        Swal.fire(
          'Atención!',
          'Creado con éxito!',
          'success'
        )
    })
  }
}
