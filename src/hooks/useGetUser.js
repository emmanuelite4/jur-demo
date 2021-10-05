import { useSelector } from "react-redux";

const useGetUser = () => {
  const user = useSelector((state) => state.user.activeUser);
  return [user];
};
export default useGetUser;
