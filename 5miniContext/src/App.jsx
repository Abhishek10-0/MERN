import React from 'react';
import UserContext from './UserContext';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <UserContext>
      <Login />
      <Profile />
    </UserContext>
  );
}

export default App;
