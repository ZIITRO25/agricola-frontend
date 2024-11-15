import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CultivoService } from '../services/cultivo.service';

interface Cultivo {
  nombre: string;
  descripcion: string;
  fecha_plantacion: string;
}

@Component({
  selector: 'app-cultivos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cultivos.component.html',
  styleUrls: ['./cultivos.component.css'],
})
export class CultivosComponent implements OnInit {
  cultivos: Cultivo[] = [];

  constructor(private cultivoService: CultivoService) {}

  ngOnInit(): void {
    this.loadCultivos();
  }

  loadCultivos() {
    this.cultivoService.getAllCultivos().subscribe(
      (data) => {
        this.cultivos = data;
      },
      (error) => {
        console.error('Error al cargar los cultivos', error);
      }
    );
  }
}

