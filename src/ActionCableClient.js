import ActionCable from "actioncable";
import { useDispatch } from "react-redux";
import { setNewMessage } from "./redux/message/message.slice";
import { useEffect, useState } from "react";
import Notification from "./components/Notification";

const cable = ActionCable.createConsumer(process.env.REACT_APP_API_WS_ENDPOINT);

function ActionCableClient() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState({});
  useEffect(() => {
    cable.subscriptions.create("NotificationsChannel", {
      received: (message) => handleMessage(message),
      connected: () => console.log("connected"),
    });
    // eslint-disable-next-line
  }, []);

  const handleMessage = (message) => {
    dispatch(setNewMessage(message));
    setMessage(message);
  };

  return <Notification message={message} />;
}

export default ActionCableClient;
