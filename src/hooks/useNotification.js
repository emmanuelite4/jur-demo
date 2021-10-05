import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { selectConversationByID } from "../redux/conversation/conversation.selector";
import { URL_CONVERSATION } from "../constants/navigations";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { isUser, isUserInArray } from "../utils/helper";

const useNotification = (message = {}) => {
  const [open, setOpen] = useState();
  const history = useHistory();
  const { conversation_id: active_conversation_id } = useParams();

  const { conversation_id, id, contact_ids, sender_id } = message;

  const { title } = useSelector(selectConversationByID(conversation_id)) || {};

  const handleRedirect = () => {
    if (active_conversation_id !== conversation_id) {
      history.push(`${URL_CONVERSATION}/${conversation_id}`);
    }
    notification.close(id);
  };

  const handleOpenNotification = () => {
    if (id && !isUser(sender_id) && isUserInArray(contact_ids)) {
      setOpen(true);
    }
  };

  useEffect(() => {
    handleOpenNotification();
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    // eslint-disable-next-line
  }, [message]);

  return { handleRedirect, title, open };
};

export default useNotification;
