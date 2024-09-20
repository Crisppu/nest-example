import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
    @Get('/user')
    getHello() {
        return 'user!'
    }
}
