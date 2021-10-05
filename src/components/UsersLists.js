import UserItem from "./UserItem/UserItem";

const UsersLists = ({ users = [], selectedUser, setSelectedUser }) => {
  return (
    <div>
      {users.map((user) => {
        const { name, id } = user;
        return (
          <UserItem
            name={name}
            id={id}
            key={id}
            onClick={() => setSelectedUser(user)}
            selected={selectedUser.id === id}
          />
        );
      })}
    </div>
  );
};

export default UsersLists;
