import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pregunta',
  templateUrl: './actualizar-pregunta.component.html',
  styleUrls: ['./actualizar-pregunta.component.css']
})
export class ActualizarPreguntaComponent implements OnInit {

  preguntaId: any;
  pregunta: any;
  examen: any;

  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService, private router: Router) { }

  ngOnInit(): void {
    this.preguntaId = this.route.snapshot.params['preguntaId'];
    this.preguntaService.obtenerPregunta(this.preguntaId).subscribe(
      (dato) => {
        this.pregunta = dato;
        console.log(this.pregunta);
      }, (error) => {
        console.log(error);
      }
    )
  }

  public actualizarDatosDeLaPregunta() {
    this.preguntaService.actualizarPregunta(this.pregunta).subscribe(
      (dato) => {
        Swal.fire('Pregunta actualizada', 'La pregunta se ha actualizado con éxito', 'success').then((e) => {
          this.router.navigate(['/admin/ver-preguntas/' + this.pregunta.examen.examenId + '/' + this.pregunta.examen.titulo]);
        });
      }
    )
  }
}
