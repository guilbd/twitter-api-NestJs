import { JwtService } from '@nestjs/jwt';
import { AuthResponse, LoginDto } from './auth.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private db;
    private jwt;
    constructor(db: PrismaService, jwt: JwtService);
    login(data: LoginDto): Promise<AuthResponse>;
}
