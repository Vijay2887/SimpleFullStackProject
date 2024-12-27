import { useContext } from "react";
import { MyContext } from "./UserBioData";
import deleteUser from "../helpers/deleteUser";

function DeleteButton() {
  const { setUsers, user } = useContext(MyContext);
  return (
    <button
      onClick={() => {
        deleteUser(user._id);
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
