import { useState, createContext } from "react";
import SaveButton from "./SaveButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export const MyContext = createContext();

function UserBioData(props) {
  const { user, setUsers } = props;
  const [isEditing, setIsEditing] = useState(false);
  // const [newUser, setNewUser] = useState(user.name);
  // const [newAge, setNewAge] = useState(user.age);
  const border = {
    border: "2px solid",
    margin: "5px",
    padding: "10px",
    display: "inline-block",
  };
  return (
    <>
      <div style={border}>
        <b>ID: </b>
        {user._id} <br />
        <b>Name: </b>
        {/* Dynamic label or input field for name  */}
        {isEditing ? (
          <input
            value={user.name}
            onChange={(event) => {
              // setNewUser(event.target.value);
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) => {
                  if (currentUser._id === user._id) {
                    return { ...currentUser, name: event.target.value };
                  } else {
                    return currentUser;
                  }
                });
              });
            }}
          ></input>
        ) : (
          <span>{user.name}</span>
        )}
        <br />
        <b>Age: </b>
        {/* Dynamic label or input field for age */}
        {isEditing ? (
          <input
            type="number"
            value={user.age}
            onChange={(event) => {
              // setNewAge(event.target.value);
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) => {
                  if (currentUser._id === user._id) {
                    return { ...currentUser, age: event.target.value };
                  } else {
                    return currentUser;
                  }
                });
              });
            }}
          ></input>
        ) : (
          <span>{user.age}</span>
        )}
        <br />
        <hr />
        {/* Edit Button */}
        <MyContext.Provider value={{ isEditing, setIsEditing }}>
          <EditButton></EditButton>
        </MyContext.Provider>
        {/* save button */}
        <MyContext.Provider value={{ isEditing, setUsers, user, setIsEditing }}>
          <SaveButton></SaveButton>
        </MyContext.Provider>
        {/* delete button */}
        <MyContext.Provider value={{ setUsers, user }}>
          <DeleteButton></DeleteButton>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default UserBioData;
