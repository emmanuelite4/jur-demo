import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/api";

function* addMessage({ payload }) {
  console.log(payload);
  try {
    const { data } = yield call(api.postMessage, payload);

    // console.log(data);
    yield put({ type: "message/addMessageSuccess", payload: data });
  } catch (e) {
    const error = e.response.message;
    yield put({ type: "message/addMessageError", error });
  }
}

export function* addMessageSaga() {
  yield takeEvery("message/addMessageStart", addMessage);
}

function* fetchMessages({ payload }) {
  try {
    const { data } = yield call(api.getMessages, payload);
    // console.log(data);
    yield put({ type: "message/fetchMessagesSuccess", payload: data });
  } catch (e) {
    const error = e.response.message;
    yield put({ type: "message/fetchMessagesError", error });
  }
}

export function* fetchMessagesSaga() {
  yield takeEvery("message/fetchMessagesStart", fetchMessages);
}
