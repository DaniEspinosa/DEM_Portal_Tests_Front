import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  examenId: any;
  examen: any = new Object();

  constructor(private examenService: ExamenService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (dato: any) => {
        this.examen = dato;
        console.log(dato);
      }, (error) => {
        console.log(error);
      }
    )
  }

  empezarExamen() {
    Swal.fire({
      title: '¿Comenzar el examen?',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si',
      icon: 'info'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.router.navigate(['/start/' + this.examenId]);
      }
    })
  }
}
