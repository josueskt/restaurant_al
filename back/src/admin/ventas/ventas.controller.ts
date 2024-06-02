import { Controller, Get, Param } from '@nestjs/common';
import { VentasService } from './ventas.service';

@Controller('ventas')
export class VentasController {
    constructor(private venta: VentasService) {

    }
    @Get()
    traer_ventas() {
        return this.venta.traer()
    }
    @Get(':id')
    por_id(@Param('id') id: number) {
        return this.venta.detalle_factura(id)
    }
}
