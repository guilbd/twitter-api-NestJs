import { PrismaService } from 'src/prisma.service';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private db;
    constructor(db: PrismaService);
    validate(payload: {
        username: string;
    }): Promise<any>;
}
export {};
