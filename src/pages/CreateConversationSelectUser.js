import UserItem from "../components/UserItem/UserItem";
import { Button, Typography } from "antd";
import useSelectUsers from "../hooks/useSelectUsers";
import WelcomeHeader from "../components/WelcomeHeader";

const CreateConversationSelectUser = () => {
  const { users, selectedUsers, handleSelectUser, handleSubmit } =
    useSelectUsers();

  return (
    <div className={"container"}>
      <WelcomeHeader />
      <Typography.Title level={3}>Select contacts to message</Typography.Title>
      <div>
        {users.map((user) => (
          <UserItem
            name={user.name}
            onClick={handleSelectUser(user)}
            key={user.id}
            selected={selectedUsers.find((contact) => contact.id === user.id)}
          />
        ))}
      </div>
      <Button onClick={handleSubmit}>Continue</Button>
    </div>
  );
};

export default CreateConversationSelectUser;
