import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqlService } from './sql/slq.service';
import { PlatosController } from './admin/platos/platos.controller';
import { CategoriasController } from './admin/categorias/categorias.controller';
import { VentasController } from './admin/ventas/ventas.controller';
import { LoginController } from './user/login/login.controller';
import { RegisterController } from './user/register/register.controller';
import { MetodosController } from './user/metodos/metodos.controller';
import { FacturaController } from './user/factura/factura.controller';
import { CompraController } from './user/compra/compra.controller';
import { CategoriasService } from './admin/categorias/categorias.service';
import { PlatosService } from './admin/platos/platos.service';
import { VentasService } from './admin/ventas/ventas.service';
import { LoginService } from './user/login/login.service';
import { RegisterService } from './user/register/register.service';

@Module({
  imports: [],
  controllers: [AppController, PlatosController, CategoriasController, VentasController, LoginController, RegisterController, MetodosController, FacturaController, CompraController],
  providers: [AppService,SqlService, CategoriasService, PlatosService, VentasService, LoginService, RegisterService],
})
export class AppModule {}
