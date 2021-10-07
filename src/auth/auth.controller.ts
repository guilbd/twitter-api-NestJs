<<<<<<< HEAD
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { User } from '.prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './auth.dto';
import AuthUser from 'src/common/decorators/auth-user.decorator';
=======
import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { User } from '.prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './auth.dto';
import { Request } from 'express';
>>>>>>> a354ec937835f484c45f2b62bcb27a9b5695e464

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
<<<<<<< HEAD
  me(@AuthUser() user: User): User {
=======
  me(@Req() req: Request): User {
    const user = req.user as User;
    delete user.password;
>>>>>>> a354ec937835f484c45f2b62bcb27a9b5695e464
    return user;
  }
}
