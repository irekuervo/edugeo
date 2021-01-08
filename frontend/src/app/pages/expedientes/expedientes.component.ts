import { Component, AfterViewInit, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Expediente } from 'app/model/expediente';
import { ExpedienteService } from 'app/services/expediente/expediente.service';

@Component({
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['ver','id','numeroTrim','descripcionTramite', 'codigoTrata','fechaCaratulacion'];
  dataSource = new MatTableDataSource<Expediente>();


  constructor(private service: ExpedienteService,){}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.dataSource.data = data
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
