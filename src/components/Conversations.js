import ChatItem from "../components/ChatItem/ChatItem";

const Conversations = ({ conversations = [], onSelect, userID }) => {
  return (
    <div>
      {conversations.map((conversation) => {
        const { title, id, last_message } = conversation;
        const lastMessageText =
          last_message.length > 0 ? last_message[0].content : "";
        const lastMessageSender =
          last_message.length > 0
            ? {
                id: last_message[0].sender_id,
                name: last_message[0].sender_name,
              }
            : {};
        const isUser = lastMessageSender.id === userID;
        return (
          <ChatItem
            isUser={isUser}
            key={id}
            id={id}
            title={title}
            lastMessage={lastMessageText}
            user={lastMessageSender.name}
            onClick={onSelect}
          />
        );
      })}
    </div>
  );
};
export default Conversations;
