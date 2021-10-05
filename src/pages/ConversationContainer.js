import ChatForm from "../components/ChatForm";
import useConversation from "../hooks/useConversation";
import Messages from "../components/Messages";
import Header from "../components/Header";

const ConversationContainer = () => {
  const { messages, activeUserID, conversationTitle } = useConversation();
  return (
    <div className={"container"}>
      <Header title={conversationTitle} />
      <div style={{ width: 320, flex: 1, overflow: "auto" }}>
        <Messages messages={messages} activeUserID={activeUserID} />
      </div>
      <ChatForm />
    </div>
  );
};

export default ConversationContainer;
