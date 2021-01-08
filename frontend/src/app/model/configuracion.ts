import { Entity } from "./entity";

export class Configuracion extends Entity{
    tratas: string[];
    tratasDocumentos:string[];
    tratasPases:string[];
    estados: string[];
    tiposDocumento: string[];
    periodicidadMinutos: number;
    usuarioConsulta: string;
    sistemaOrigen: string;
    importarDocumentos: boolean;
    
}