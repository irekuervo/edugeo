import { Inject, Injectable } from '@angular/core';
import { Entity } from 'app/model/entity';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Importacion } from 'app/model/importacion';


export class EntityService<T extends Entity> {

  constructor(protected http: HttpClient, protected url:string) {
   }


  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}${id}`);
  }

  put(entity: T) : Observable<T> {
    return this.http.put<T>(this.url, entity);
  }

  update(entity: T) : Observable<T> {
    return this.http.post<T>(this.url, entity);
  }

  delete(id:number) : Observable<T> {
    return this.http.delete<T>(`${this.url}${id}`);
  }
}
