import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ImportacionesComponent } from './pages/importaciones/importaciones.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { ExpedienteComponent } from './pages/expediente/expediente.component';
import { TratasComponent } from './pages/tratas/tratas.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    ImportacionesComponent,
    UsuariosComponent,
    ConfiguracionComponent,
    SandboxComponent,
    ExpedientesComponent,
    ExpedienteComponent,
    TratasComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
