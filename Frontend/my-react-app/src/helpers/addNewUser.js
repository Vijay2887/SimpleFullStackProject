import axios from "axios";

async function addNewUser(name, age) {
  //   console.log(`name: ${name} age:${age}`);
  const user = {
    name,
    age,
  };
  try {
    await axios.post("http://localhost:3000/api/users", user);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
export default addNewUser;
