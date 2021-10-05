import Header from "../components/Header";
import { Button } from "antd";
import useHomeHelper from "../hooks/useHomeHelper";
import UsersLists from "../components/UsersLists";

const HomeContainer = () => {
  const { users, handleContinue, selectedUser, setSelectedUser } =
    useHomeHelper();
  return (
    <div className={"container"}>
      <Header title={"Let us know who you are"} />
      <UsersLists
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <Button type="primary" size={"large"} onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
};

export default HomeContainer;
