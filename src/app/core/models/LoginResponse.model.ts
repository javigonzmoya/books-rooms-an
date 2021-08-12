import { User } from "./User.model";

export interface LoginResponse {
    ok:    boolean;
    token: string;
    user:  User;
}


