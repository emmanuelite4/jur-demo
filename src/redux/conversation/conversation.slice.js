import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
  activeConversation: {},
  error: "",
  loading: false,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchConversationsSuccess(state, action) {
      state.conversations = action.payload;
      state.loading = false;
    },
    fetchConversationsError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchConversationsStart(state) {
      state.loading = true;
    },
    fetchActiveConversationStart(state) {
      state.loading = true;
    },
    fetchActiveConversationSuccess(state, action) {
      console.log(action.payload);
      state.activeConversation = action.payload;
    },
    fetchActiveConversationError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addConversationStart(state) {
      state.loading = true;
    },
    addConversationSuccess(state, action) {
      state.loading = false;
      state.activeConversation = action.payload;
    },
    addConversationError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchConversationsStart,
  fetchActiveConversationStart,
  addConversationStart,
} = conversationSlice.actions;

export default conversationSlice.reducer;
