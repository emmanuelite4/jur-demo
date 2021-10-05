import User from "../../assets/user.png";
import styles from "./ChatItem.module.css";

import { Typography } from "antd";

const Text = Typography.Text;

const ChatItem = ({
  id,
  user,
  isUser,
  lastMessage,
  title,
  onClick,
  disabled,
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick(id);
  };
  return (
    <div
      className={`${styles.root} ${isUser ? styles.active : ""}`}
      onClick={handleClick}
    >
      <img src={User} alt={user} className={styles.avatar} />
      <div>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.user}>{isUser ? "You" : user}</Text>
        <Text className={styles.last_message}>{lastMessage}</Text>
      </div>
    </div>
  );
};

export default ChatItem;
