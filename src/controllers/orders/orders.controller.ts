import { Controller, Get, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    @Get()
    getOrderType(@Query('type') type: string, @Query('name') name: string){
        return `order type => ${type} and name: ${name}`
    }
}
