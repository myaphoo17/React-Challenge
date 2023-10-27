import { useEffect, useState } from "react";
import { User } from "./User";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]); // 

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("users.json", { signal })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => {
        setLoading(false);
        abortController.abort();
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <User key={user.id} name={user.name} /> // Added a "key" prop
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
