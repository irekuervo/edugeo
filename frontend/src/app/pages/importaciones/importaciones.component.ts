import { Component, AfterViewInit, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Importacion } from 'app/model/importacion';
import { EntityService } from 'app/services/entity/entity.service';
import { ImportacionService } from 'app/services/importacion/importacion.service';
import { ConfiguracionService } from 'app/services/configuracion/configuracion.service';
import { Configuracion } from 'app/model/configuracion';

@Component({
  templateUrl: './importaciones.component.html',
  styleUrls: ['./importaciones.component.css']
})
export class ImportacionesComponent implements OnInit, AfterViewInit  {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id','estadoString','fechaInicio', 'duracionMinutos','registros','configuracion'];
  dataSource = new MatTableDataSource<Importacion>();

  public configuracion : Configuracion;

  constructor(private service: ImportacionService, private configService: ConfiguracionService){}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.dataSource.data = data
    });
    this.configService.getConfiguracion().subscribe(data => {
      this.configuracion = data
    });
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}



