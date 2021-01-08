import { Entity } from "./entity";

export class Expediente  extends Entity {

    descripcionTramite: string;
    numero: string;
    codigoTrata: string;
    fechaCaratulacion: Date;

}