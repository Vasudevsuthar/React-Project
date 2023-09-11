import React, {useState} from 'react';

import User from './components/User/User';
import Userlist from './components/User/Userlist';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}
      ]; 
    });
  };
  return (
    <div>
     <User onAddUser={addUserHandler}/>
     <Userlist users={usersList}/>
    </div>
  );
}

export default App;
