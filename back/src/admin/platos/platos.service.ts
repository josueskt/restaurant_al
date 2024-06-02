import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/slq.service';
import { Plato_interface } from './plato.interface'
import * as path from 'path';

import * as fs from 'fs';

@Injectable()
export class PlatosService {

    constructor(private slq: SqlService) {

    }
    get_all() {
        return this.slq.query('SELECT p.nombre,p.precio,p.id as id_plato, p.description,c.nombre as categoria  FROM plato as p  INNER JOIN  categoria as c ON c.id = p.fk_categoria ')
    }
 

    async crear(plato: Plato_interface, file: Express.Multer.File) {
        console.log(file)
        try {

            if (!file || !file.buffer) {
                throw new HttpException('Archivo no válido', HttpStatus.BAD_REQUEST);
            }
            // Genera un nombre único para el archivo PDF
            const uniqueFileName = `${Date.now()}-${file.originalname}`;


            // Construye la ruta completa del archivo en la carpeta pdfs
            const pdfPath = path.join( process.env.Docs, uniqueFileName);

            // Crea el stream de escritura del archivo
            const writeStream = fs.createWriteStream(pdfPath);
            writeStream.write(file.buffer);

            // Cierra el flujo después de escribir el contenido
            writeStream.end();

         await   this.slq.query('INSERT INTO plato(nombre,precio,imagen,description,fk_categoria)VALUES($1,$2,$3,$4,$5)',[plato.nombre,plato.precio,uniqueFileName,plato.description,plato.fk_categoria])

            
            return { message: 'Plato creado' };
        } catch (error) {
            console.error('Error al guardar el archivo:', error);
            throw new HttpException('Error al guardar el archivo', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

    eliminar(id: string) {
        this.slq.query("DELETE FROM plato where id =$1", [id])
    }
}
