import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private user: UserService){}

    @Get('/users')
    findAll(){
        return 'all users'
    }

    @Get(':id')
    findOne(@Param() id: BigInt){
        console.log(id)
        return 'one user';
    }

    @Post()
    create(@Body() input: any){
        console.log(input);
        return input;

    }
        
}
