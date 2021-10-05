import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/api";
import localService from "../../services/localService";

function* fetchUsers() {
  try {
    const { data } = yield call(api.getUsers);

    yield put({ type: "user/fetchUsersSuccess", payload: data });
  } catch (e) {
    let error = e.response.data;
    yield put({ type: "user/fetchUsersError", error });
  }
}

function setActiveUser({payload}) {
  localService.setUserID(payload.id);
}

export function* setActiveUserSaga() {
  yield takeEvery("user/setActiveUser", setActiveUser);
}

export function* fetchUsersSaga() {
  yield takeEvery("user/fetchUsersStart", fetchUsers);
}
