import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expediente } from 'app/model/expediente';
import { ExpedienteService } from 'app/services/expediente/expediente.service';

@Component({
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ExpedienteService,) { }

  expediente: Expediente;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = +params.get('expedienteId');
      this.service.get(id).subscribe(data => {
        this.expediente = data
      });
    });
  }

}
