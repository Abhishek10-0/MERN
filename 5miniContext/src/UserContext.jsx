import React, { useState } from 'react';
import Context from './Context/Context';

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export default UserContext;
