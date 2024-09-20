import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
    @Get('/user')
    getAllUsers() {
        return this.userService.getUsers();
    }
}
