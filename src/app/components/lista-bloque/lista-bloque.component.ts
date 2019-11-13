import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-bloque',
  templateUrl: './lista-bloque.component.html',
  styleUrls: ['./lista-bloque.component.scss']
})
export class ListaBloqueComponent implements OnInit {
  Bloque=[
    {
      Id: '1',
      Nombre: 'A',
      Facultad: 'Ingeniería'
    },
    {
      Id: '2',
      Nombre: 'B',
      Facultad: 'Derecho'
    },
    {
      Id: '3',
      Nombre: 'C',
      Facultad: 'Contaduría'
    },
    {
      Id: '4',
      Nombre: 'D',
      Facultad: 'Ciencias'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
