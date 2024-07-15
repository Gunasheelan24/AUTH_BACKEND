import { Body, Controller, Post } from "@nestjs/common";
import SignInService from "./SignIn.service";
import SignInDto from "./Dto/SignIn.dto";

@Controller("auth")
export default class SignInController {
  constructor(private SignInService: SignInService) {}

  @Post()
  signInMethod(@Body() userDetail: SignInDto) {
    return this.SignInService.SignIn(userDetail);
  }

  @Post("signIn")
  Login(@Body() userDetail: SignInDto) {
    return this.SignInService.LoginMethod(userDetail);
  }
}
