import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get(':id')
    getCustomer(@Param('id') id: string){
        return  `Id del cliente ${id}`
    }

    @Post()
    create(@Body() payload: any){
        return {
        message: "ok",
        payload
        }
    }
}
