import { IsignIn } from "../Interface/Auth.Interface";
export default class SignInDto implements IsignIn {
    email: string;
    password: string;
}
