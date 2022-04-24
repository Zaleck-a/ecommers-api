import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('account')
    getProductFilter() {
      return `i am user account`;
    }
}
