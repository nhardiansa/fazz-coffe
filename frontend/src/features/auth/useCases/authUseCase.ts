import { Credential, Token } from "../entities";

export interface AuthService {
  loginWithCredential: (credential: Credential) => Promise<Token>;
}

export class AuthUseCase {
  loginService!: AuthService;

  constructor(loginService: AuthService) {
    this.loginService = loginService;
  }

  async login(params: Credential): Promise<Token> {
    return this.loginService.loginWithCredential(params);
  }
}
