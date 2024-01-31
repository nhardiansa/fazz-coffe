import { Either } from "@/core/either";
import { LoginResponse } from "../";

export abstract class AuthRemoteDatasource {
  abstract login(
    email: string,
    password: string
  ): Promise<Either<Error, LoginResponse>>;
}

export class AuthRemoteDatasourceImpl implements AuthRemoteDatasource {
  login(
    email: string,
    password: string
  ): Promise<Either<Error, LoginResponse>> {
    throw new Error("Method not implemented.");
  }
}
