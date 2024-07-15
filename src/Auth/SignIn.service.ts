import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IsignIn } from "./Interface/Auth.Interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import SignInEntity from "./Entity/Auth.Entity";
import SignInDto from "./Dto/SignIn.dto";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";

@Injectable()
export default class SignInService {
  constructor(
    @InjectRepository(SignInEntity)
    private usersRepository: Repository<SignInEntity>
  ) {}
  async SignIn(userDetail: IsignIn) {
    const getUser = await this.usersRepository.query(
      "SELECT * FROM auth.sign_in_entity WHERE email = ?",
      [userDetail.email]
    );
    if (getUser.length > 0) {
      console.log("USER ALREADY EXIST");
    } else {
      const Newpassword = await this.hashPassword(userDetail.password);
      if (Newpassword === "Hashing Failed")
        return "Error While Hasing Password";
      userDetail.password = Newpassword;
      await this.usersRepository.query(
        `INSERT INTO auth.sign_in_entity (email, password, confirmPassword) VALUES (?, ?, ?)`,
        [userDetail.email, userDetail.password, userDetail.password]
      );
      return "USER CREATED SUCCESSFULL";
    }
  }

  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 12);
    if (hashedPassword) return hashedPassword;
    return "Hashing Failed";
  }

  async LoginMethod(userDetail: SignInDto) {
    const findUser = await this.usersRepository.query(
      `SELECT * FROM auth.sign_in_entity WHERE email = ?`,
      [userDetail.email]
    );
    if (findUser.length <= 0) {
      throw new HttpException("Email Not Found", HttpStatus.NOT_FOUND);
    } else {
      const isPassword = await this.ConfirPassword(
        userDetail.password,
        findUser[0].password
      );
      if (isPassword) {
        return findUser;
      }
    }
  }

  async ConfirPassword(Plainpassword: string, hashedPassword: string) {
    if (!Plainpassword) {
      throw new HttpException("Password is required", HttpStatus.BAD_REQUEST);
    } else {
      const isMatch = await bcrypt.compare(Plainpassword, hashedPassword);
      if (!isMatch) {
        throw new HttpException(
          "Your password is incorrect",
          HttpStatus.UNAUTHORIZED
        );
      }
      return true;
    }
  }
}
