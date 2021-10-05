import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectOtherUser } from "../redux/user/user.selector";
import { useState } from "react";
import { selectContactsForConversation } from "../redux/user/user.slice";
import { URL_CREATE_CONVERSATION_ADD_TITLE } from "../constants/navigations";

const useSelectUsers = () => {
  const history = useHistory();
  const users = useSelector(selectOtherUser);
  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const handleSelectUser = (user) => () => {
    let index = selectedUsers.findIndex((contact) => contact.id === user.id);

    if (index > -1) {
      setSelectedUsers(
        selectedUsers.filter((contact) => contact.id !== user.id)
      );
    } else {
      setSelectedUsers((prev) => prev.concat([user]));
    }
  };

  const handleSubmit = () => {
    dispatch(selectContactsForConversation(selectedUsers));
    history.push(URL_CREATE_CONVERSATION_ADD_TITLE);
  };
  return { users, selectedUsers, handleSelectUser, handleSubmit };
};

export default useSelectUsers;
