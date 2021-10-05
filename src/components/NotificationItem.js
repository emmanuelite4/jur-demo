import { Typography } from "antd";

const NotificationItem = ({ title, sender, content, onClick }) => {
  return (
    <div onClick={onClick}>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Text>{sender}</Typography.Text>
      <br />
      <Typography.Text>{content}</Typography.Text>
    </div>
  );
};

export default NotificationItem;
