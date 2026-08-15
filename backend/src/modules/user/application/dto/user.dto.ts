import { User } from "../../core/interface/user.interface";

export type CreateUserDto = Omit<User, "id">;
export type UserResponseDto = Omit<User, "password">;