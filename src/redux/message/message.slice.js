import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new_message: {},
  active_conversation: null,
  messages: [],
  loading: false,
  error: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessageStart(state) {
      state.loading = true;
    },
    addMessageSuccess(state, action) {
      // console.log(action.payload);
    },
    addMessageError(state, action) {
      console.log(action.payload);
    },
    fetchMessagesStart(state) {
      // console.log(action.payload)
    },
    fetchMessagesSuccess(state, action) {
      // console.log(action.payload);
      state.messages = action.payload;
    },
    fetchMessageError(state, action) {
      state.error = action.payload;
    },
    setNewMessage(state, action) {
      state.new_message = action.payload;
      if (
        action.payload.conversation_id === parseInt(state.active_conversation)
      ) {
        state.messages.push(action.payload);
      }
    },
    setMessageActiveConversation(state, action) {
      state.active_conversation = action.payload;
    },
  },
});

export default messageSlice.reducer;

export const {
  addMessageStart,
  fetchMessagesStart,
  setNewMessage,
  setMessageActiveConversation,
} = messageSlice.actions;
