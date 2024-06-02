import { Body, Controller, Post } from '@nestjs/common';
import { Register } from './register.interface';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

constructor(private register:RegisterService){}
@Post()
crear(@Body()usuario:Register){

    return this.register.crear(usuario)
}

}

