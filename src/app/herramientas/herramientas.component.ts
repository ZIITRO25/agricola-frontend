import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerramientaService } from '../services/herramienta.service';

interface Herramienta {
  nombre: string;
  descripcion: string;
  cantidad: number;
}

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css'],
})
export class HerramientasComponent implements OnInit {
  herramientas: Herramienta[] = [];

  constructor(private herramientaService: HerramientaService) {}

  ngOnInit(): void {
    this.loadHerramientas();
  }

  loadHerramientas() {
    this.herramientaService.getAllHerramientas().subscribe(
      (data) => {
        this.herramientas = data;
      },
      (error) => {
        console.error('Error al cargar las herramientas', error);
      }
    );
  }
}
