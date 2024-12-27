import { useContext } from "react";
import { MyContext } from "./UserBioData";
import updateUser from "../helpers/updateUser";

//user._id has the user Id
// newUser has the users new name
// newAge has the users new age

function SaveButton() {
  const { isEditing, setUsers, user, setIsEditing } = useContext(MyContext);
  if (!isEditing) return;
  return (
    <button
      onClick={() => {
        // console.log(user._id, newUser, newAge);
        updateUser(user._id, user.name, user.age);
        setIsEditing(false);
      }}
    >
      Save
    </button>
  );
}

export default SaveButton;
