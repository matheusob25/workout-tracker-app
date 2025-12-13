import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    lastName: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}


export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;

}
