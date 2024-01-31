import { Either } from "@/core/either";
import { AuthRepository, Login } from "../..";
import { AuthRemoteDatasource } from "..";

export class AuthRepositoryImpl implements AuthRepository {
  _authRemoteDatasource!: AuthRemoteDatasource;

  constructor(authRemoteDatasource: AuthRemoteDatasource) {
    this._authRemoteDatasource = authRemoteDatasource;
  }

  login(email: string, password: string): Promise<Either<Error, Login>> {
    throw new Error("Method not implemented.");
  }
}
