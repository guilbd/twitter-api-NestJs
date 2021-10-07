import { User } from '@prisma/client';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    all(): Promise<User[]>;
    findUnique(username: string): Promise<User>;
    deleteUser(username: string): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
}
