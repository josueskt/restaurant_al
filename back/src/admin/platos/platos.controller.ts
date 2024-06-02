import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PlatosService } from './platos.service';
import { Plato_interface } from './plato.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('platos')
export class PlatosController {
constructor(private plato_s:PlatosService){}
@Get()
all(){
return  this.plato_s.get_all()
}
@Post()
@UseInterceptors(FileInterceptor('file'))

crear(@Body()plato:Plato_interface , @UploadedFile() file:Express.Multer.File){
    

    return this.plato_s.crear(plato,file)
}
@Delete(':id')
elimianr(@Param('id')id:string){
    return this.plato_s.eliminar(id)
}
}
