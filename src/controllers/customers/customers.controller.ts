import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get(':id')
    getCustomer(@Param('id') id: string){
        return  `Id del cliente ${id}`
    }

}
