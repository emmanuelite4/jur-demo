import { useDispatch } from "react-redux";
import { Form } from "antd";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { addMessageStart } from "../redux/message/message.slice";

const useChat = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { conversation_id } = useParams();

  const onSubmit = ({ content }) => {
    dispatch(addMessageStart({ id: conversation_id, content }));
    form.resetFields();
  };
  return { onSubmit, form };
};

export default useChat;
