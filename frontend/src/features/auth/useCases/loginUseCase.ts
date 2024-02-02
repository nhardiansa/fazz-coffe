import { Credential, Token } from "../entities";

export interface LoginService {
  loginWithCredential: (credential: Credential) => Promise<Token>;
}

export class LoginUseCase {
  loginService!: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  async login(params: Credential): Promise<Token> {
    return this.loginService.loginWithCredential(params);
  }
}
