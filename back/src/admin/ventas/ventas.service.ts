import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/slq.service';

@Injectable()
export class VentasService {
constructor(private slq:SqlService){

}
    traer(){
return this.slq.query('SELECT * FROM factura ')
    }

    detalle_factura(id:number){
    return this.slq.query('SELECT p.nombre,p.precio  FROM plato as p LEFT JOIN detalle_factura as d ON d.fk_plato = p.id LEFT JOIN factura as f ON d.fk_factura = f.id where f.id = $1',[id])

    }
}
