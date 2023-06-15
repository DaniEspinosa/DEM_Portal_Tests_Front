import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-load-examen',
  templateUrl: './load-examen.component.html',
  styleUrls: ['./load-examen.component.css']
})
export class LoadExamenComponent implements OnInit {

  examenes: any;
  catId: any

  constructor(private route: ActivatedRoute, private examenService: ExamenService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catId = params['catId'];

      if (this.catId == 0) {
        console.log("Cargando los examenes");
        this.examenService.obtenerExamenesActivos().subscribe(
          (dato) => {
            this.examenes = dato;
            console.log(this.examenes);
          }, (error) => {
            console.log(error);
          }
        )
      } else {
        console.log("Cargando un examen en especifico");
        this.examenService.obtenerExamenesActivosDeUnaCategoria(this.catId).subscribe(
          (dato: any) => {
            this.examenes = dato;
            console.log(this.examenes);
          }, (error) => {
            console.log(error);
          }
        )
      }
    })
  }
}
