import { put, call, delay, takeLatest } from "redux-saga/effects";
import { authenticate } from "@services/auth";
import { ActionTypes, authFailure, authSuccess } from "@store/user";

export function* userAuthentication(action: any) {
  try {
    // TODO: remove delay
    yield delay(1000);
    const { data } = yield call(authenticate, action.payload);
    yield put(authSuccess(data));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

export function* watchUserSignin() {
  yield takeLatest(ActionTypes.AUTH_REQUEST, userAuthentication);
}
