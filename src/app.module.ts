import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import SignInModule from "./Auth/SignIn.module";
import SignInEntity from "./Auth/Entity/Auth.Entity";

@Module({
  imports: [
    SignInModule,
    TypeOrmModule.forRoot({
      username: "root",
      type: "mysql",
      password: "Devikaa@1624",
      host: "localhost",
      port: 3306,
      synchronize: true,
      database: "auth",
      entities: [SignInEntity],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
