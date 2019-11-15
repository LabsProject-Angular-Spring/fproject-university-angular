import { Component, OnInit } from '@angular/core';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import { ListFacultyService } from '../../services/list-faculty.service'
import { Laby } from '../../models/laby';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent implements OnInit {
  buildings;
  public form: DynamicFormGroup<Laby>;

  constructor(private fb: DynamicFormBuilder, private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.listFacultyService.listBuilding().subscribe(res => {
      this.buildings = res;
    })
    this.form = this.fb.group(Laby, {
      name: '', buildingid: ''
    });
  }
  save() {
    this.listFacultyService.saveLab(JSON.parse(JSON.stringify(this.form.object))).subscribe(res => {
      if (res == 'Saved'){

        Swal.fire(
          'Atención!',
          'Creado con éxito!',
          'success'
          )
        }else {
          console.log(res)
        }
    })
  }
}
