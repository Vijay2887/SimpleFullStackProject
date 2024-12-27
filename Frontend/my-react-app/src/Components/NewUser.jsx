import { useState } from "react";
import addNewUser from "../helpers/addNewUser";

function NewUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <input
        type="submit"
        onClick={() => {
          addNewUser(name, age);
        }}
      />
    </>
  );
}
export default NewUser;
