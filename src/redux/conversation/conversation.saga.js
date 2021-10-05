import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";
import { URL_CONVERSATION } from "../../constants/navigations";

function* fetchConversations() {
  try {
    const { data } = yield call(api.getConversations);

    yield put({
      type: "conversation/fetchConversationsSuccess",
      payload: data,
    });
  } catch (e) {
    let error = e.response.data;
    yield put({ type: "conversation/fetchConversationsError", error });
  }
}

export function* fetchConversationsSaga() {
  yield takeEvery("conversation/fetchConversationsStart", fetchConversations);
}

function* fetchActiveConversation({ payload }) {
  try {
    const { data } = yield call(api.getActiveConversation, payload);

    yield put({
      type: "conversation/fetchActiveConversationSuccess",
      payload: data,
    });
  } catch (e) {
    let error = e.response.data;
    yield put({ type: "conversation/fetchActiveConversationError", error });
  }
}

export function* fetchActiveConversationSaga() {
  yield takeEvery(
    "conversation/fetchActiveConversationStart",
    fetchActiveConversation
  );
}

function* addConversation({ payload }) {
  try {
    const { data } = yield call(api.addConversation, payload);

    console.log("success");

    yield put({
      type: "conversation/addConversationSuccess",
      payload: data,
    });

    yield put(push(`${URL_CONVERSATION}/${data.id}`));
  } catch (e) {
    let error = e;
    console.log("error >>", error);
    yield put({ type: "conversation/addConversationError", error });
  }
}

export function* addConversationSaga() {
  yield takeEvery("conversation/addConversationStart", addConversation);
}
