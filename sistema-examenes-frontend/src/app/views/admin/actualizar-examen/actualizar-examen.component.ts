import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit {

  examenId = 0;
  examen: any;
  categorias: any;

  constructor(private route: ActivatedRoute, private examenService: ExamenService, private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (dato) => {
        this.examen = dato;
        console.log(this.examen);
      }, (error) => {
        console.log(error);
      }
    )

    this.categoriaService.listarCategorias().subscribe(
      (dato: any) => {
        this.categorias = dato;
      }, (error) => {
        alert('Error al cargar las categorias');
      }
    )
  }

  public actualizarExamen() {
    this.examenService.actualizarExamen(this.examen).subscribe(
      (dato) => {
        Swal.fire('Examen actualizado', 'El examen se actualizó con éxito', 'success').then(
          (e) => {
            this.router.navigate(['/admin/examenes']);
          }
        );
      }, (error) => {
        Swal.fire('Error', 'Error, no se ha podido actualizar el examen', 'error');
        console.log(error);
      }
    )
  }

}
