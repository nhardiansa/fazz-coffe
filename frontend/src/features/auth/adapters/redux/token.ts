import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Token } from "../../entities/token";
import { RootState } from "../../frameworks/redux";
import { Credential } from "../../entities/credential";
import { LoginServiceImpl } from "../../services/loginServiceImpl";
import { LoginInteractor } from "../../interactors/loginInteractor";

interface StateType {
  token: Token;
}

const initialState: StateType = {
  token: {
    access: "",
    refresh: "",
  },
};

const login = createAsyncThunk<StateType, Credential>(
  "token/login",
  async (params, { rejectWithValue }) => {
    try {
      const service = new LoginServiceImpl();
      const interactor = new LoginInteractor(service);
      const result = await interactor.login(params);
      return result;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
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
});

export const { tokenUpdate, tokenClear } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token;

export default tokenSlice.reducer;
