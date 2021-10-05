import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { URL_CONVERSATION } from "../constants/navigations";
import { useEffect } from "react";
import { fetchConversationsStart } from "../redux/conversation/conversation.slice";

const useConversations = () => {
  const dispatch = useDispatch();
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );

  const history = useHistory();
  const handleSelectConversation = (id) => {
    history.push(`${URL_CONVERSATION}/${id}`);
  };

  useEffect(() => {
    dispatch(fetchConversationsStart());
    // eslint-disable-next-line
  }, []);

  return { conversations, handleSelectConversation };
};

export default useConversations;
