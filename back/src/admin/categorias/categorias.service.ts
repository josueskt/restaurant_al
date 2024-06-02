import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/slq.service';

@Injectable()
export class CategoriasService {
constructor(private sql:SqlService){

}
get_all(){


    return this.sql.query('SELECT * FROM categoria')
}

crear(nombre:string){

    try{
        this.sql.query("INSERT INTO categoria(nombre)VALUES($1)",[nombre])
        return {"message":"creado exitosamente"}

    }catch(e){
        return {"error":e}
    }
}
eliminar(id:string){
    try{
        this.sql.query("DELETE FROM categoria WHERE id = $1",[id])
        return {"message":"eliminado exitosamente"}

    }catch(e){
        return {"error":e}
    }
}
}
