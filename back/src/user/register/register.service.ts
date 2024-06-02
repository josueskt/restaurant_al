import { Injectable } from '@nestjs/common';
import { Register } from './register.interface';
import { SqlService } from 'src/sql/slq.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class RegisterService {
constructor(private sql:SqlService){}
    async crear(usuario:Register){
 const usuari=  await this.sql.query('select * from usr where email = $1',[usuario.email]) 
if(usuari.length){
    return {"message":"email ya usado "}
}else{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(usuario.password, salt);



    console.log(hashedPassword)

    this.sql.query('INSERT INTO usr(nombre,email,password,fk_rol)VALUES($1,$2,$3,$4)',[usuario.nombre,usuario.email,hashedPassword,usuario.fk_rol])
}

}

}
