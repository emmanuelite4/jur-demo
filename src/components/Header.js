import { Typography } from "antd";

const { Title } = Typography;

const Header = ({ title, description }) => {
  return (
    <header>
      <Title>{title}</Title>
      <Title level={3}>{description}</Title>
    </header>
  );
};

export default Header;
