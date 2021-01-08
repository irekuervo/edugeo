import { Entity } from "./entity";

export class Importacion extends Entity {
    fechaInicio: Date;
    duracion: number;
    estado: string;
    expedientesNuevos: number;
    expedientesActualizados: number;
    expedientesArchivados: number;
}