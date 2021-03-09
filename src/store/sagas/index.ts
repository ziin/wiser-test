import { all } from "redux-saga/effects";
import { watchUserSignin } from "./user-auth";

export function* rootSaga(): Generator {
  yield all([watchUserSignin()]);
}
