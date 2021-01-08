import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuracion } from 'app/model/configuracion';
import { Expediente } from 'app/model/expediente';
import { Observable } from 'rxjs';
import { EntityService } from '../entity/entity.service';

@Injectable({
    providedIn: 'root'
  })
  export class ExpedienteService extends EntityService<Expediente>{
    
    constructor(http: HttpClient) {
      super(http,'expediente/');
    }
  
  }
  