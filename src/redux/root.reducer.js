import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import userReducer from "./user/user.slice";
import conversationReducer from "./conversation/conversation.slice";
import messageReducer from "./message/message.slice";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    conversation: conversationReducer,
    message: messageReducer,
  });
export default rootReducer;
