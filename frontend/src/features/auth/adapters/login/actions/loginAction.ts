import { AuthServiceImpl } from "@/features/auth/services/loginServiceImpl";
import { LoginState } from "..";
import { LoginUseCase } from "@/features/auth/useCases/loginUseCase";

export const loginAction = async (get: () => LoginState) => {
  const service = new AuthServiceImpl();
  const interactor = new LoginUseCase(service);
  get().setLoading(true);

  try {
    const token = await interactor.login(get().credential);
    get().setToken(token);
  } catch (error) {
    get().setErrorMessage("Failed to login");
  } finally {
    get().setLoading(false);
  }
};
