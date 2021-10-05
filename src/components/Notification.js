import { notification } from "antd";
import { useEffect } from "react";
import NotificationItem from "./NotificationItem";
import useNotification from "../hooks/useNotification";

const Notification = ({ message }) => {
  const { handleRedirect, open, title } = useNotification(message);
  const { sender_name, content, id } = message;

  useEffect(() => {
    if (open) {
      notification.open({
        key: id,
        description: (
          <NotificationItem
            title={title}
            sender={sender_name}
            content={content}
            onClick={handleRedirect}
          />
        ),
      });
    }
    // eslint-disable-next-line
  }, [open]);

  return <> </>;
};

export default Notification;
