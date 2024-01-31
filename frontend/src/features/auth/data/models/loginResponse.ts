import { Login } from "../..";

interface ILoginResponse {
  success: boolean;
  message: string;
  result: {
    accessToken: string;
    refreshToken: string;
  };
}

export class LoginResponse {
  success!: boolean;
  message!: string;
  result!: {
    accessToken: string;
    refreshToken: string;
  };

  constructor(_params: ILoginResponse) {
    this.success = _params.success;
    this.message = _params.message;
    this.result = _params.result;
  }

  static mapper(data: any): LoginResponse {
    return new LoginResponse({
      success: true,
      message: "belum di map",
      result: {
        accessToken: "asdasdasd",
        refreshToken: "asdasd",
      },
    });
  }

  protected toEntity(): Login {
    return new Login(this.result.accessToken, this.result.refreshToken);
  }
}
