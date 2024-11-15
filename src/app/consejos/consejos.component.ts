import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsejoService } from '../services/consejo.service';

interface Consejo {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-consejos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css'],
})
export class ConsejosComponent implements OnInit {
  consejos: Consejo[] = [];

  constructor(private consejoService: ConsejoService) {}

  ngOnInit(): void {
    this.loadConsejos();
  }

  loadConsejos() {
    this.consejoService.getAllConsejos().subscribe(
      (data ) => {
        this.consejos = data;
      },
      (error) => {
        console.error('Error al cargar los consejos', error);
      }
    );
  }
}

