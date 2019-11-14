import { Component, OnInit } from '@angular/core';
import { ListFacultyService } from 'src/app/services/list-faculty.service';

@Component({
  selector: 'app-lista-laboratorio',
  templateUrl: './lista-laboratorio.component.html',
  styleUrls: ['./lista-laboratorio.component.scss']
})
export class ListaLaboratorioComponent implements OnInit {
  Laboratorio;
  constructor(private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.listFacultyService.listLabs().subscribe(res => {
      this.Laboratorio = res;
    })
  }

}
