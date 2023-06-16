import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent {

  categorias: any = [

  ]

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato: any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al cargar las categorias', 'error');
      }
    )
  }

  eliminarCategoria(categoriaId: any) {
    Swal.fire({
      title: 'Eliminar Categoria',
      text: '¿Estás serguro de eliminar la categoría?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#3085d6',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.eliminarCategoria(categoriaId).subscribe(
          (dato) => {
            this.categorias = this.categorias.filter((categoria: any) => categoria.categoriaId != categoriaId);
            Swal.fire('Categoria eliminada', 'La categoria se ha eliminado correctamente', 'success');
          }, (error) => {
            Swal.fire('Error', 'Error al eliminar la categoria', 'error');
          }
        );
      }
    })
  }
}
