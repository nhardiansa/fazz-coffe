export class Credential {
  private _email: string;
  private _password: string;

  constructor(email: string, password: string) {
    if (this.isInvalid(password)) {
      throw new Error("Your password must contains only letter and numbers");
    }

    if (this.isInvalidEmail(email)) {
      throw new Error("Invalid email address");
    }

    this._password = password;
    this._email = email.toLowerCase();
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  private isInvalid(password: string) {
    const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return !passwordRegex.test(password);
  }

  private isInvalidEmail(email: string) {
    const validEmailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !validEmailRegex.test(email);
  }
}
