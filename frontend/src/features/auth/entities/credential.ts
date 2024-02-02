export class Credential {
  email!: string;
  password!: string;

  constructor(email: string, password: string) {
    if (Credential.isEmptyOrNull(email) || Credential.isEmptyOrNull(password)) {
      throw new Error("You must fill email and password");
    }

    if (Credential.isInvalidAddress(email)) {
      throw new Error("Invalid email address");
    }

    this.email = email;
    this.password = password;
  }

  static isInvalidAddress(email: string) {
    const validEmailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !validEmailRegex.test(email);
  }

  static isEmptyOrNull(word: string) {
    return !word || word.trim().length === 0;
  }
}
