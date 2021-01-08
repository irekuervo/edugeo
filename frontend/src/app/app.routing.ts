import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ImportacionesComponent } from 'app/pages/importaciones/importaciones.component';
import { UsuariosComponent } from 'app/pages/usuarios/usuarios.component';
import { ConfiguracionComponent } from 'app/pages/configuracion/configuracion.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { ExpedienteComponent } from './pages/expediente/expediente.component';
import { TratasComponent } from './pages/tratas/tratas.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MapsComponent } from './pages/maps/maps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'importaciones',
    pathMatch: 'full',
  }, 
  { path: 'importaciones', component: ImportacionesComponent },
  { path: 'expedientes/:expedienteId', component: ExpedienteComponent },
  { path: 'expedientes', component: ExpedientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tratas', component: TratasComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'maps', component: MapsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
