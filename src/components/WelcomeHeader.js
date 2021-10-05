import Header from "./Header";
import useGetUser from "../hooks/useGetUser";

const WelcomeHeader = () => {
  const [user] = useGetUser();
  return <Header title={`Welcome ${user.name}!`} />;
};

export default WelcomeHeader;
