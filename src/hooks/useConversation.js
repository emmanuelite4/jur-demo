import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchActiveConversationStart } from "../redux/conversation/conversation.slice";
import {
  fetchMessagesStart,
  setMessageActiveConversation,
} from "../redux/message/message.slice";
import localService from "../services/localService";

const useConversation = () => {
  const { conversation_id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const conversation = useSelector(
    (state) => state.conversation.activeConversation
  );
  const messages = useSelector((state) => state.message.messages);
  // const activeUser = useSelector(selectActiveUser);

  const activeUserID = localService.getUserID();
  const { title: conversationTitle } = conversation;
  useEffect(() => {
    dispatch(fetchActiveConversationStart(conversation_id));
    dispatch(fetchMessagesStart(conversation_id));
    dispatch(setMessageActiveConversation(conversation_id));
    // eslint-disable-next-line
  }, [conversation_id]);

  return { messages, activeUserID, conversationTitle };
};

export default useConversation;
