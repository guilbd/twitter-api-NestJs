import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class UsersService {
    private db;
    constructor(db: PrismaService);
    getAll(): Promise<User[]>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    findUnique(username: string): Promise<User>;
    create(data: Prisma.UserCreateInput): Promise<User>;
}
