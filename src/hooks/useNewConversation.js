import { useDispatch, useSelector } from "react-redux";
import { addConversationStart } from "../redux/conversation/conversation.slice";
import { selectNewConversationContact } from "../redux/user/user.selector";

const useNewConversation = () => {
  const contacts = useSelector(selectNewConversationContact);
  const contactIDs = contacts.map((contact) => contact.id);

  const dispatch = useDispatch();
  const onSubmit = ({ title }) => {
    dispatch(addConversationStart({ title, contact_ids: contactIDs }));
  };

  return { onSubmit, contacts, contactIDs };
};

export default useNewConversation;
