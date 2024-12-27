import axios from "axios";

async function updateUser(id, name, age) {
  const newUser = {
    name,
    age,
  };

  try {
    await axios.patch(`http://localhost:3000/api/users/${id}`, newUser);
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
export default updateUser;
