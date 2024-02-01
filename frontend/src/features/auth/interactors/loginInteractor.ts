import { Credential } from "../entities/credential";
import { Token } from "../entities/token";

export interface LoginService {
  loginWithCredential: (credential: Credential) => Promise<Token>;
}

export class LoginInteractor {
  loginService!: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  async login(params: Credential): Promise<Token> {
    return this.loginService.loginWithCredential(params);
  }
}
