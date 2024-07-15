import { Module } from "@nestjs/common";
import SignInService from "./SignIn.service";
import SignInController from "./SignIn.controller";
import SignInEntity from "./Entity/Auth.Entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SignInEntity])],
  controllers: [SignInController],
  providers: [SignInService],
})
export default class SignInModule {
  constructor() {}
}
