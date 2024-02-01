export class Credential {
  email!: string;
  password!: string;

  constructor(email: string, password: string) {
    if (isEmptyOrNull(email) || isEmptyOrNull(password)) {
      throw new Error("You must fill email and password");
    }

    if (isInvalidAddress(email)) {
      throw new Error("Invalid email address");
    }

    this.email = email;
    this.password = password;
  }
}

function isInvalidAddress(email: string) {
  const validEmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !validEmailRegex.test(email);
}

function isEmptyOrNull(word: string) {
  return !word || word.trim().length === 0;
}
