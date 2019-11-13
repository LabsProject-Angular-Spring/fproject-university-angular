import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-laboratorio',
  templateUrl: './lista-laboratorio.component.html',
  styleUrls: ['./lista-laboratorio.component.scss']
})
export class ListaLaboratorioComponent implements OnInit {
  Laboratorio=[
    {
      Id: '1',
      Nombre: 'Física',
      Bloque  : 'A'
    },
    {
      Id: '2',
      Nombre:'Software',
      Bloque  : 'B'
    },
    {
      Id: '3',
      Nombre: 'Redes',
      Bloque  : 'C'
    },
    {
      Id: '4',
      Nombre: 'Química',
      Bloque  : 'D'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
