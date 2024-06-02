import { Injectable } from '@nestjs/common';
import { login } from './login.interface';
import { SqlService } from 'src/sql/slq.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoginService {
    constructor(public sql: SqlService) { }

    private readonly jwtSecretKey = process.env.Key_Key;
    async Login(datos: login) {

        const usuario = await this.sql.query('select * from usr where email = $1', [datos.email])

        if (usuario.length === 1) {

            const user: { password: string, nombre: string, email: string, id_usuario: number, fk_rol: number } = usuario[0]

            var passwordMatch = await bcrypt.compare(datos.password, user.password);



            if (passwordMatch) {
                const token = jwt.sign(
                    {
                        id_user: user.id_usuario,
                        email: user.email,
                        nombre: user.nombre,
                        nombre_rol: user.fk_rol,
                    },
                    this.jwtSecretKey,
                    { expiresIn: '3000h' }, // Configura la expiración del token
                );


                return { token };
            } else {
                return {"message":"contraseña erronea"};        
               }
        }else {
            return {"message":"Usuario no encontrado"};        
           }

    }
}