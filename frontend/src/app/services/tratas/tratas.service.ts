import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trata } from 'app/model/trata';
import { EntityService } from '../entity/entity.service';

@Injectable({
  providedIn: 'root'
})
export class TratasService extends EntityService<Trata>{

  constructor(http: HttpClient) {
    super(http,'trata/');
  }
}
