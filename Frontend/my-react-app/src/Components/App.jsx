import { useEffect, useState } from "react";
import UserBioData from "./UserBioData";
import axios from "axios";
import NewUser from "./NewUser";

function App() {
  // Use State variables
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isnewUserClicked, setIsNewUserClicked] = useState(false);
  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchAllUsers();
  }, []);

  return (
    <>
      {isnewUserClicked ? (
        <>
          <NewUser />
          <button
            onClick={() => {
              setIsNewUserClicked(!isnewUserClicked);
            }}
          >
            Close
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsNewUserClicked(!isnewUserClicked);
          }}
        >
          Add New User
        </button>
      )}
      <br />
      <br />
      {loading
        ? "Loading..."
        : users.map((user) => (
            <UserBioData key={user._id} user={user} setUsers={setUsers} />
          ))}
    </>
  );
}

export default App;
