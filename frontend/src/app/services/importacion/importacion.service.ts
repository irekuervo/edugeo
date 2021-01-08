import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuracion } from 'app/model/configuracion';
import { Importacion } from 'app/model/importacion';
import { Observable } from 'rxjs';
import { EntityService } from '../entity/entity.service';

@Injectable({
    providedIn: 'root'
  })
  export class ImportacionService extends EntityService<Importacion>{
    
    constructor(http: HttpClient) {
      super(http,'importacion/');
    }
  
    getConfiguracion(): Observable<Configuracion> {
      return null; //this.http.get<ConfiguracionImportador>(this.urlImportador);
    }
  }
  