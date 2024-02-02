import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Token } from "../../entities/token";
import { RootState } from "../../../../core/services/redux/redux";
import { Credential } from "../../entities/credential";
import { AuthServiceImpl } from "../../services/loginServiceImpl";
import { LoginUseCase } from "../../useCases/loginUseCase";

interface StateType {
  token: Token;
  isLoading: boolean;
  error: string | null;
}

const initialState: StateType = {
  token: {
    access: "",
    refresh: "",
  },
  error: null,
  isLoading: false,
};

export const login = createAsyncThunk(
  "token/login",
  async (params: Credential) => {
    const service = new AuthServiceImpl();
    const interactor = new LoginUseCase(service);
    return await interactor.login(params);
  }
);

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    tokenUpdate: (state: StateType, action: PayloadAction<StateType>) => {
      state.token = action.payload.token;
    },
    tokenClear: (state: StateType, action: PayloadAction<StateType>) => {
      state.token = {
        access: "",
        refresh: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Login Failed";
        console.error("FAILED LOGIN", action.error);
      });
  },
});

export const { tokenUpdate, tokenClear } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token;

export const tokenReducer = tokenSlice.reducer;
