import SignInService from "./SignIn.service";
import SignInDto from "./Dto/SignIn.dto";
export default class SignInController {
    private SignInService;
    constructor(SignInService: SignInService);
    signInMethod(userDetail: SignInDto): Promise<"Error While Hasing Password" | "USER CREATED SUCCESSFULL">;
    Login(userDetail: SignInDto): Promise<any>;
}
