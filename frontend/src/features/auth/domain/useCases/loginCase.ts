import { UseCase } from "@/core/useCase/useCase";
import { AuthRepository, Credential, Login } from "..";
import { Either } from "@/core/either";

export class LoginCase extends UseCase<Login, Credential> {
  private _repo: AuthRepository;

  constructor(repo: AuthRepository) {
    super();
    this._repo = repo;
  }

  call(params: Credential): Promise<Either<Error, Login>> {
    return this._repo.login(params.email, params.password);
  }
}
