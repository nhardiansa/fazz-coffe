import { all, call, put, takeLatest } from "redux-saga/effects";
import { Credential } from "../../entities/credential";
import { LoginInteractor } from "../../interactors/loginInteractor";
import { LoginServiceImpl } from "../../services/loginServiceImpl";
import { Token } from "../../entities/token";

export const LOGIN = "user/saga/login";

interface LoginActionType {
  type: string;
  credential: Credential;
}

export const loginAction = (credential: Credential): LoginActionType => ({
  type: LOGIN,
  credential,
});

function* loginSaga(action: LoginActionType) {
  const { credential } = action;
  try {
    const service = new LoginServiceImpl();
    const interactor = new LoginInteractor(service);

    const token: Token = yield interactor.login(credential);
    yield put(setTokenAction(token));
  } catch (error) {
    console.error(error);
    // DO SOMETHING ELSE
  }
}

export function* rootSaga() {
  yield all([takeLatest(LOGIN, loginSaga)]);
}
