import { Either } from "@/core/either";
import { Login } from "..";

export abstract class AuthRepository {
  abstract login(
    email: string,
    password: string
  ): Promise<Either<Error, Login>>;
  // abstract register(registerParams: RegisterParams): Promise<Either<Error, Register>>;
}
