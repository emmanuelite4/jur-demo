import { Button, Form, Input } from "antd";
import useChat from "../hooks/useChat";

const ChatForm = () => {
  const { onSubmit, form } = useChat();
  return (
    <Form onFinish={onSubmit} form={form} layout="inline">
      <Form.Item name={"content"}>
        <Input placeholder={" Start typing..."} />
      </Form.Item>
      <Button htmlType={"submit"}>Send here</Button>
    </Form>
  );
};

export default ChatForm;
