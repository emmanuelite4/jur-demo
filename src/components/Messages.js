import ChatItem from "./ChatItem/ChatItem";
import { Typography } from "antd";

const Messages = ({ messages, activeUserID }) => {
  return (
    <div>
      {messages.length === 0 && (
        <Typography.Text>No message yet</Typography.Text>
      )}
      {messages.map((message) => {
        const { id, content, sender_name, sender_id } = message;
        return (
          <ChatItem
            key={id}
            title={content}
            isUser={activeUserID === sender_id}
            user={sender_name}
            disabled
          />
        );
      })}
    </div>
  );
};

export default Messages;
