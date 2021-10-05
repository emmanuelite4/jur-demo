import { Button, Form, Input } from "antd";

const NewConversationForm = ({ onSubmit }) => {
  return (
    <Form onFinish={onSubmit}>
      <Form.Item name={"title"}>
        <Input placeholder={"Enter title..."} />
      </Form.Item>
      <Button htmlType={"submit"}>Start conversation</Button>
    </Form>
  );
};

export default NewConversationForm;
