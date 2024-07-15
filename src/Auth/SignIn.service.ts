import { Injectable } from "@nestjs/common";
import { IsignIn } from "./Interface/Auth.Interface";

@Injectable()

export default class SignInService {
    constructor() {}
    SignIn(userDetail: IsignIn) {
        return userDetail;
    }
}