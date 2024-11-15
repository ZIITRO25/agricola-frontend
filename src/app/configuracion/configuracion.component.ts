import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DepartamentoService } from '../services/departamento.service';
import { CultivoService } from '../services/cultivo.service';
import { HerramientaService } from '../services/herramienta.service';
import { ConsejoService } from '../services/consejo.service';

interface Item {
  id: number;
  nombre?: string;
  titulo?: string;
  descripcion?: string;
  contenido?: string;
  cantidad?: number;
  email?: string;
  role?: string;
  username?: string;
  password?: string;
}

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  selectedSection: string = 'departamentos';
  items: Item[] = [];
  showForm: boolean = false;
  itemData: Partial<Item> = {};

  constructor(
    private userService: UserService,
    private departamentoService: DepartamentoService,
    private cultivoService: CultivoService,
    private herramientaService: HerramientaService,
    private consejoService: ConsejoService
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  selectSection(section: string): void {
    this.selectedSection = section;
    this.loadItems();
  }

  loadItems(): void {
    switch (this.selectedSection) {
      case 'departamentos':
        this.departamentoService.getAllDepartamentos().subscribe(
          (data) => this.items = data,
          (error) => console.error('Error fetching departamentos', error)
        );
        break;
      case 'cultivos':
        this.cultivoService.getAllCultivos().subscribe(
          (data) => this.items = data,
          (error) => console.error('Error fetching cultivos', error)
        );
        break;
      case 'herramientas':
        this.herramientaService.getAllHerramientas().subscribe(
          (data) => this.items = data,
          (error) => console.error('Error fetching herramientas', error)
        );
        break;
      case 'consejos':
        this.consejoService.getAllConsejos().subscribe(
          (data) => this.items = data,
          (error) => console.error('Error fetching consejos', error)
        );
        break;
      case 'usuario':
        this.userService.getAllUsers().subscribe(
          (data) => this.items = data,
          (error) => console.error('Error fetching users', error)
        );
        break;
    }
  }

  openForm(item?: Item): void {
    this.itemData = item ? { ...item } : {};
    this.showForm = true;
  }

  saveItem(): void {
    switch (this.selectedSection) {
      case 'departamentos':
        if (this.itemData.id) {
          this.departamentoService.updateDepartamento(this.itemData.id, this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error updating departamento', error)
          );
        } else {
          this.departamentoService.createDepartamento(this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error creating departamento', error)
          );
        }
        break;
      case 'cultivos':
        if (this.itemData.id) {
          this.cultivoService.updateCultivo(this.itemData.id, this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error updating cultivo', error)
          );
        } else {
          this.cultivoService.createCultivo(this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error creating cultivo', error)
          );
        }
        break;
      case 'herramientas':
        if (this.itemData.id) {
          this.herramientaService.updateHerramienta(this.itemData.id, this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error updating herramienta', error)
          );
        } else {
          this.herramientaService.createHerramienta(this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error creating herramienta', error)
          );
        }
        break;
      case 'consejos':
        if (this.itemData.id) {
          this.consejoService.updateConsejo(this.itemData.id, this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error updating consejo', error)
          );
        } else {
          this.consejoService.createConsejo(this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error creating consejo', error)
          );
        }
        break;
      case 'usuario':
        if (this.itemData.id) {
          this.userService.updateUser(this.itemData.id, this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error updating user', error)
          );
        } else {
          this.userService.createUser(this.itemData).subscribe(
            () => this.loadItems(),
            (error) => console.error('Error creating user', error)
          );
        }
        break;
    }
    this.showForm = false;
  }

  deleteItem(item: Item): void {
    switch (this.selectedSection) {
      case 'departamentos':
        this.departamentoService.deleteDepartamento(item.id).subscribe(
          () => this.loadItems(),
          (error) => console.error('Error deleting departamento', error)
        );
        break;
      case 'cultivos':
        this.cultivoService.deleteCultivo(item.id).subscribe(
          () => this.loadItems(),
          (error) => console.error('Error deleting cultivo', error)
        );
        break;
      case 'herramientas':
        this.herramientaService.deleteHerramienta(item.id).subscribe(
          () => this.loadItems(),
          (error) => console.error('Error deleting herramienta', error)
        );
        break;
      case 'consejos':
        this.consejoService.deleteConsejo(item.id).subscribe(
          () => this.loadItems(),
          (error) => console.error('Error deleting consejo', error)
        );
        break;
      case 'usuario':
        this.userService.deleteUser(item.id).subscribe(
          () => this.loadItems(),
          (error) => console.error('Error deleting user', error)
        );
        break;
    }
  }

  cancelForm(): void {
    this.showForm = false;
  }
}
