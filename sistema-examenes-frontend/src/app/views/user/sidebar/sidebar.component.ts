import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  categorias: any;

  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato) => {
        this.categorias = dato;
      }, (error) => {
        this.snack.open('Error al cargar las categorias', '', {
          duration: 3000
        })
        console.log(error);
      }
    )
  }


}
