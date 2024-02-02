import { Credential } from "../entities/credential";
import { Token } from "../entities/token";
import { LoginService } from "../useCases/loginUseCase";

export class AuthServiceImpl implements LoginService {
  async loginWithCredential(params: Credential): Promise<Token> {
    return Promise.resolve({
      access: "asdasdads",
      refresh: "asdasd",
    });
  }
}
