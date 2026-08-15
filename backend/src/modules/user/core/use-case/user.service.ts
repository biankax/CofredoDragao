import { Injectable } from "@nestjs/common";
import { User } from "../interface/user.interface";
import { CreateUserDto } from "../../application/dto/user.dto";
import { randomUUID } from "node:crypto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    private users: User[] = [];

    async create(dto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const novoUsuario: User = {
            ...dto,
            id: randomUUID(),
            password: hashedPassword,
        };

        this.users.push(novoUsuario);
        return novoUsuario;
    }

    findAll(): User[] {
        return this.users;
    }
}