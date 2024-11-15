
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', loadComponent: () => import ('./app/home/home.component').then(m => m.HomeComponent) },
  { path: 'cultivos', loadComponent: () => import('./app/cultivos/cultivos.component').then(m => m.CultivosComponent) },
  { path: 'herramientas', loadComponent: () => import('./app/herramientas/herramientas.component').then(m => m.HerramientasComponent) },
  { path: 'consejos', loadComponent: () => import('./app/consejos/consejos.component').then(m => m.ConsejosComponent) },
  { path: 'departamentos', loadComponent: () => import('./app/departamentos/departamentos.component').then(m => m.DepartamentosComponent) },
  { path: 'login', loadComponent: () => import('./app/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./app/register/register.component').then(m => m.RegisterComponent) },
  { path: 'configuracion', loadComponent: () => import('./app/configuracion/configuracion.component').then(m => m.ConfiguracionComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
