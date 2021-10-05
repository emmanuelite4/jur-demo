import UserItem from "../components/UserItem/UserItem";
import NewConversationForm from "../components/NewConversationForm";
import useNewConversation from "../hooks/useNewConversation";
import { Typography } from "antd";
import WelcomeHeader from "../components/WelcomeHeader";

const CreateConversationAddTitle = () => {
  const { contacts, contactIDs, onSubmit } = useNewConversation();

  return (
    <div className={"container"}>
      <WelcomeHeader />
      <Typography.Title level={3}>
        Give title to start a new conversation with {contacts.length}{" "}
        participants
      </Typography.Title>
      <div style={{ flex: 1 }}>
        {contacts.map((contact) => (
          <UserItem name={contact.name} key={contact.id} />
        ))}
      </div>
      <div style={{ width: 320, textAlign: "right" }}>
        <NewConversationForm onSubmit={onSubmit} contactIDs={contactIDs} />
      </div>
    </div>
  );
};

export default CreateConversationAddTitle;
