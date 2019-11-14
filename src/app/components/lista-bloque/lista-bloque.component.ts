import { Component, OnInit } from '@angular/core';
import { ListFacultyService } from 'src/app/services/list-faculty.service';

@Component({
  selector: 'app-lista-bloque',
  templateUrl: './lista-bloque.component.html',
  styleUrls: ['./lista-bloque.component.scss']
})
export class ListaBloqueComponent implements OnInit {
  Bloque;
  constructor(private listFacultyService: ListFacultyService) { }

  ngOnInit() {
    this.listFacultyService.listBuilding().subscribe(res => {
      this.Bloque = res;
    })
  }

}
