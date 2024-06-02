import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {

    constructor(private cate:CategoriasService){

    }
@Get()
traer_categoria(){

    return this.cate.get_all()
    
}
@Post()
Crear_categoria(@Body() categoria:{"nombre":string} ){

return this.cate.crear(categoria.nombre)


}
@Delete(':id')
eliminar_categoria(@Param('id') id:string){

    return this.cate.eliminar(id)
}


}


