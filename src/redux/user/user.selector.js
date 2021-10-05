import localService from "../../services/localService";

export const selectActiveUser = (state) => state.user.activeUser;

export const selectOtherUser = (state) =>
  state.user.users.filter((user) => user.id !== localService.getUserID());

export const selectNewConversationContact = (state) =>
  state.user.selectedContactForConversation;
