import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'app/model/configuracion';
import { ConfiguracionService } from 'app/services/configuracion/configuracion.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(private service: ConfiguracionService,private _snackBar: MatSnackBar) { }

  public estados: string[];
  public estadosSelect: string[];
 
  public tratas: string[];
  public tratasSelect: string[];

  public tratasDocumentos: string[];
  public tratasDocumentosSelect: string[];

  public tratasPases: string[];
  public tratasPasesSelect: string[];

  public guardando:boolean
  public configuracion: Configuracion;


  ngOnInit(): void {
    this.service.getConfiguracion().subscribe(data => {
      this.configuracion = data
      this.estadosSelect =  data.estados;
      this.tratasPasesSelect = data.tratasPases;
      this.tratasDocumentosSelect = data.tratasDocumentos;
      this.tratasSelect = data.tratas;
    });

    this.service.getEstados().subscribe(data => {
      this.estados = data;
    });

    this.service.getTratas().subscribe(data => {
      this.tratas = data;
    });

  }

  public selectEstados(estados: string[]) {
    this.configuracion.estados = estados;
  }

  public selectTratas(tratas: string[]) {
    this.configuracion.tratas = tratas;
  }

  public selectTratasPases(tratas: string[]) {
    this.configuracion.tratasDocumentos =tratas;
  }

  public selectTratasDocumentos(tratas: string[]) {
    this.configuracion.tratasPases = tratas;
  }

  public guardar(){
    this.guardando = true;
    this.service.update(this.configuracion).subscribe(data => {
      this.configuracion = data;
      this.guardando = false;
      this._snackBar.open("Se guardó con éxito", null, {
        duration: 2000,
      });
    });
  }

}
