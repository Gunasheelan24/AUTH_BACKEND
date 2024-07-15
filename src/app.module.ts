import { Module } from '@nestjs/common';
import SignInModule from './Auth/SignIn.module';

@Module({
  imports: [
    SignInModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
