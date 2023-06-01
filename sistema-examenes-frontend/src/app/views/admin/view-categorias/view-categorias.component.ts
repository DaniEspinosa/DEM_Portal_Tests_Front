import { Component } from '@angular/core';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent {

  categorias = [
    {
      categoriaId: 1,
      titulo: 'Prueba1',
      descripcion: 'descipsion'
    },
    {
      categoriaId: 2,
      titulo: 'Prueba2',
      descripcion: 'descipsion'
    },
    {
      categoriaId: 3,
      titulo: 'Prueba1',
      descripcion: 'descipsion'
    },
    {
      categoriaId: 4,
      titulo: 'Prueba1',
      descripcion: 'descipsion'
    }
  ]

  constructor() {}

  ngOnInit(): void {

  }
}
