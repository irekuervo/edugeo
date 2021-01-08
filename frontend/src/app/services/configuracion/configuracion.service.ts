import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuracion } from 'app/model/configuracion';
import { Observable } from 'rxjs';
import { EntityService } from '../entity/entity.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService extends EntityService<Configuracion>{



  constructor(http: HttpClient) {
    super(http, 'configuracion/');
  }

  getConfiguracion(): Observable<Configuracion> {
    return this.http.get<Configuracion>(this.url);
  }

  getEstados(): Observable<string[]> {
    return this.http.get<string[]>(this.url + "estados");
  }

  getTratas(): Observable<string[]> {
    return this.http.get<string[]>(this.url + "tratas");
  }
}
