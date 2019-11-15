import { Component, OnInit } from '@angular/core';
import { ListFacultyService } from '../../services/list-faculty.service'

@Component({
  selector: 'app-lista-facultad',
  templateUrl: './lista-facultad.component.html',
  styleUrls: ['./lista-facultad.component.scss']
})
export class ListaFacultadComponent implements OnInit {
  Facultad;
  constructor(private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.listFacultyService.list().subscribe(res => {
      this.Facultad = res;
    })
  }

}
