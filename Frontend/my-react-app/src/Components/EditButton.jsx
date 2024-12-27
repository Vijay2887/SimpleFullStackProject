import { useContext } from "react";
import { MyContext } from "./UserBioData";

function EditButton() {
  const { isEditing, setIsEditing } = useContext(MyContext);
  return (
    <button
      onClick={() => {
        setIsEditing((currentEditingState) => !currentEditingState);
      }}
    >
      Edit
    </button>
  );
}

export default EditButton;
