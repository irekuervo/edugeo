import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'app/model/configuracion';
import { ConfiguracionService } from 'app/services/configuracion/configuracion.service';

@Component({
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor(private service: ConfiguracionService) { }

  configuracion:Configuracion;

  ngOnInit(): void {
    this.service.getConfiguracion().subscribe(data => {
      this.configuracion = data
     
    });
  }

}
