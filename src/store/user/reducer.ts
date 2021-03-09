import { createReducer } from "@reduxjs/toolkit";
import { authFailure, authLogout, authRequest, authSuccess } from "./actions";
import { UserState } from "./types";

const defaultState: UserState = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const user = createReducer<UserState>(defaultState, (builder) =>
  builder
    .addCase(authRequest, () => ({
      ...defaultState,
      isLoading: true,
    }))
    .addCase(authSuccess, (_, { payload }) => ({
      ...defaultState,
      data: payload,
    }))
    .addCase(authFailure, (_, { payload }) => ({
      ...defaultState,
      error: payload,
    }))
    .addCase(authLogout, () => defaultState)
);
