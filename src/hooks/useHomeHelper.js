import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { URL_CONVERSATIONS } from "../constants/navigations";
import { fetchUsersStart, setActiveUser } from "../redux/user/user.slice";

const useHomeHelper = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const history = useHistory();

  const [selectedUser, setSelectedUser] = useState("");
  const handleContinue = () => {
    history.push(URL_CONVERSATIONS);
    // console.log(selectedUser);
    dispatch(setActiveUser(selectedUser));
  };

  useEffect(() => {
    dispatch(fetchUsersStart());
    // eslint-disable-next-line
  }, []);

  return { users, selectedUser, handleContinue, setSelectedUser };
};
export default useHomeHelper;
