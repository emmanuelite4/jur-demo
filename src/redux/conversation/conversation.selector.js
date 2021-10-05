export const selectConversationByID = (id) => (state) =>
  state.conversation.conversations.find((conv) => conv.id === id);
