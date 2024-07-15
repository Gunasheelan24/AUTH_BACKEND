import { IsignIn } from "./Interface/Auth.Interface";
import { Repository } from "typeorm";
import SignInEntity from "./Entity/Auth.Entity";
import SignInDto from "./Dto/SignIn.dto";
export default class SignInService {
    private usersRepository;
    constructor(usersRepository: Repository<SignInEntity>);
    SignIn(userDetail: IsignIn): Promise<"Error While Hasing Password" | "USER CREATED SUCCESSFULL">;
    hashPassword(password: string): Promise<string>;
    LoginMethod(userDetail: SignInDto): Promise<any>;
    ConfirPassword(Plainpassword: string, hashedPassword: string): Promise<boolean>;
}
