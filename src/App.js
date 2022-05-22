import Users from "./components/Users"
import './App.css';
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/user-context";

function App() {
  const userContext = {
    users: [
      { id: 'u1', name: 'Max' },
      { id: 'u2', name: 'Manuel' },
      { id: 'u3', name: 'Julie' },
    ]
  }

  return (
    <UsersContext.Provider value={userContext}>
    <div className="App">
     <UserFinder/>
    </div>
    </UsersContext.Provider>
  );
}

export default App;
