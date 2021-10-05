import User from "../../assets/user.png";
import UserSelected from "../../assets/user-selected.png";
import styles from "./UserItem.module.css";

import { Typography } from "antd";

const Text = Typography.Text;

const UserItem = ({ id, name, selected, onClick }) => {
  return (
    <div className={styles.root} onClick={onClick} role={"button"}>
      <img
        src={selected ? UserSelected : User}
        alt={name}
        className={styles.avatar}
      />
      <Text>{name}</Text>
    </div>
  );
};

export default UserItem;
