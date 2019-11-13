import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-facultad',
  templateUrl: './lista-facultad.component.html',
  styleUrls: ['./lista-facultad.component.scss']
})
export class ListaFacultadComponent implements OnInit {
  Facultad=[
    {
      Id: '1',
      Nombre: 'Ingeniería'
    },
    {
      Id: '2',
      Nombre:'Derecho'
    },
    {
      Id: '3',
      Nombre: 'Contaduría'
    },
    {
      Id: '4',
      Nombre: 'Ciencias'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
