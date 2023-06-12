import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pregunta',
  templateUrl: './add-pregunta.component.html',
  styleUrls: ['./add-pregunta.component.css']
})
export class AddPreguntaComponent implements OnInit {

  examenId: any;
  titulo: any;
  pregunta: any = {
    examen: {},
    contenido: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    respuesta: ''
  }

  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }

  formSubmit() {
    if (this.pregunta.contenido.trim() == '' || this.pregunta.contenido.trim() == null) {
      return;
    }
    if (this.pregunta.opcion1.trim() == '' || this.pregunta.opcion1.trim() == null) {
      return;
    }
    if (this.pregunta.opcion2.trim() == '' || this.pregunta.opcion2.trim() == null) {
      return;
    }
    if (this.pregunta.opcion3.trim() == '' || this.pregunta.opcion3.trim() == null) {
      return;
    }
    if (this.pregunta.opcion4.trim() == '' || this.pregunta.opcion4.trim() == null) {
      return;
    }
    if (this.pregunta.respuesta.trim() == '' || this.pregunta.respuesta.trim() == null) {
      return;
    }
    this.preguntaService.guardarPregunta(this.pregunta).subscribe(
      (dato) => {
        Swal.fire('Pregunta añadida', 'Pregunta añadida con éxito', 'success');
        this.pregunta.contenido = '';
        this.pregunta.opcion1 = '';
        this.pregunta.opcion2 = '';
        this.pregunta.opcion3 = '';
        this.pregunta.opcion4 = '';
        this.pregunta.respuesta = '';
      }, (error) => {
        Swal.fire('Error', 'Error al añadir la pregunta', 'error');
        console.log(error);
      }
    )
  }
}
