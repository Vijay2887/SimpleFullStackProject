import axios from "axios";

async function deleteUser(id) {
  await axios.delete(`http://localhost:3000/api/users/${id}`);
  window.location.reload();
}

export default deleteUser;
