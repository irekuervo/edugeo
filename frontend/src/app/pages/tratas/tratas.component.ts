import { Component, OnInit, ViewChild } from '@angular/core';
import { TratasService } from 'app/services/tratas/tratas.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Trata } from 'app/model/trata';

@Component({
  templateUrl: './tratas.component.html',
  styleUrls: ['./tratas.component.css']
})
export class TratasComponent implements OnInit {

  constructor(private service: TratasService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id','nombre'];
  dataSource = new MatTableDataSource<Trata>();

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
