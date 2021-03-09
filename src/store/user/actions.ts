import { createAction } from "@reduxjs/toolkit";
import { ActionTypes, AuthCredentials, User } from "./types";

export const authRequest = createAction<AuthCredentials>(
  ActionTypes.AUTH_REQUEST
);
export const authSuccess = createAction<User>(ActionTypes.AUTH_SUCCESS);
export const authFailure = createAction<string>(ActionTypes.AUTH_FAILURE);
export const authLogout = createAction(ActionTypes.AUTH_LOGOUT);
