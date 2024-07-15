import {IsString, IsNotEmpty, IsEmail, MinLength, MaxLength} from "class-validator";
import {IsignIn} from "../Interface/Auth.Interface";

export default class SignInDto implements IsignIn {
   @IsString()
   @IsNotEmpty()
   @IsEmail()
   email: string;
   
   @IsString()
   @IsNotEmpty()
   @MinLength(4)
   @MaxLength(12)
   password: string;
}