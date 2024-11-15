import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoService } from '../services/departamento.service';

interface Departamento {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos() {
    this.departamentoService.getAllDepartamentos().subscribe(
      (data: Departamento[]) => {
        this.departamentos = data;
      },
      (error: any) => {
        console.error('Error al cargar los departamentos', error);
      }
    );
  }
}
