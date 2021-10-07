<<<<<<< HEAD
import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
=======
import { Controller, Body, Get, Post, Param, Delete,  UseGuards } from '@nestjs/common';
>>>>>>> a354ec937835f484c45f2b62bcb27a9b5695e464
import { User } from '@prisma/client';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get('list')
  async all(): Promise<User[]> {
    return this.service.getAll();
  }

  @Get(':username')
  findUnique(@Param('username') username: string): Promise<User> {
    return this.service.findUnique(username);
  }

  @Delete('/delete/:username')
  async deleteUser(@Param('username') username: string): Promise<User> {
    return this.service.deleteUser({ username: String(username) });
  }

  @Post()
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }
}
