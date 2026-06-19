import { Body, Controller,HttpCode,HttpStatus,Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, LoginDto } from "./dto";

@Controller('auth')
export class AuthController{
   constructor(private authService: AuthService){} 

   @Post('signup')
   signup(@Body() authDto: AuthDto){
      return this.authService.signup(authDto);
   }


   @HttpCode(HttpStatus.OK)
   @Post('login')
   signin(@Body() loginDto: LoginDto){
      return this.authService.signin(loginDto);

   }

   
   


}