import { all } from "redux-saga/effects";
import { fetchUsersSaga, setActiveUserSaga } from "./user/user.saga";
import {
  addConversationSaga,
  fetchActiveConversationSaga,
  fetchConversationsSaga,
} from "./conversation/conversation.saga";
import { addMessageSaga, fetchMessagesSaga } from "./message/message.saga";

export default function* rootSaga() {
  yield all([
    fetchUsersSaga(),
    setActiveUserSaga(),
    fetchConversationsSaga(),
    fetchActiveConversationSaga(),
    addMessageSaga(),
    fetchMessagesSaga(),
    addConversationSaga(),
  ]);
}
