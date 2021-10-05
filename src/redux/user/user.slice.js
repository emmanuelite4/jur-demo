import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  activeUser: {},
  selectedContactForConversation: [],
  error: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action) {
      // console.log(action);
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setActiveUser(state, action) {
      state.activeUser = action.payload;
    },
    selectContactsForConversation(state, action) {
      state.selectedContactForConversation = action.payload;
    },
  },
});

export const { fetchUsersStart, setActiveUser, selectContactsForConversation } =
  userSlice.actions;

export default userSlice.reducer;
