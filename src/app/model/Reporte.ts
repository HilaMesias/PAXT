import { Envio } from "./Envio";
import { Trabajador } from "./Trabajador";

export class Reporte{
    id: number = 0;
    foto: boolean = false;
    comentarios:string="";
    fecha:Date = new Date(Date.now());
    trabajador: Trabajador = new Trabajador();
    envio: Envio = new Envio();
}