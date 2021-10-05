import { Button, Typography } from "antd";
import { URL_CREATE_CONVERSATION_SELECT_USER } from "../constants/navigations";
import useGetUser from "../hooks/useGetUser";
import useConversations from "../hooks/useConversations";
import Conversations from "../components/Conversations";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import WelcomeHeader from "../components/WelcomeHeader";

const ConversationsContainer = () => {
  const [user] = useGetUser();
  const { handleSelectConversation, conversations } = useConversations();

  const history = useHistory();

  return (
    <div className={"container"}>
      <WelcomeHeader />

      <Typography.Title level={3}>
        {conversations.length === 0
          ? "You don’t have any conversations"
          : "Your conversation"}
      </Typography.Title>
      <div style={{ padding: 10, textAlign: "right" }}>
        <Button
          onClick={() => history.push(URL_CREATE_CONVERSATION_SELECT_USER)}
        >
          Create New Conversation
        </Button>
      </div>
      <Conversations
        conversations={conversations}
        onSelect={handleSelectConversation}
        userID={user.id}
      />
    </div>
  );
};
export default ConversationsContainer;
