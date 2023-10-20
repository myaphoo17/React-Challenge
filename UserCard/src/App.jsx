
import { UserInfo } from "./UserCard.jsx";
import { UserCardClass } from "./UserCardClass.jsx";
import "./user.css";
import user from "./user.json";

function App() {
  return (
    <div>

      <h3>From UserCard.jfx</h3>

      <UserInfo
        name={user.name}
        age={user.age}
        phone={user.phoneNumber}
        address={user.address}
      />

      <br />

      <h3>From UserCardClass.jfx</h3>

      <UserCardClass
        name={user.name}
        age={user.age}
        phone={user.phoneNumber}
        address={user.address}
      />


    </div>
  );
}

export default App;
