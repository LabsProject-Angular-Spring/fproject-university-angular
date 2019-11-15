import { Component, OnInit } from '@angular/core';
import { ListFacultyService } from '../../services/list-faculty.service'
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import {Bloque} from '../../models/bloque';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {
  faculties;
  public form: DynamicFormGroup<Bloque>;
  
  constructor(private fb: DynamicFormBuilder, private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.form = this.fb.group(Bloque, {
      name: '', facultyid: ''
    });
    this.listFacultyService.list().subscribe(res => {
      this.faculties = res;
    })
  }
  save(){
    this.listFacultyService.save(JSON.parse(JSON.stringify(this.form.object))).subscribe(res => {
      if(res == 'Saved')
      Swal.fire(
        'Atención!',
        'Creado con éxito!',
        'success'
      )
    })
  }
}
