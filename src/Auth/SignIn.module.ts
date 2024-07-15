import { Module } from "@nestjs/common";
import SignInService from "./SignIn.service";
import SignInController from "./SignIn.controller";

@Module({
    imports: [],
    controllers: [
        SignInController
    ],
    providers: [
        SignInService
    ]
})

export default class SignInModule {
    constructor() {}
}