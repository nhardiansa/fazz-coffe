import { Credential, Token } from "../entities";
import { LoginService } from "../useCases/loginUseCase";

export class AuthServiceImpl implements LoginService {
  async loginWithCredential(params: Credential): Promise<Token> {
    return Promise.resolve({
      access: "asdasdads",
      refresh: "asdasd",
    });
  }
}
