import React, { useContext } from 'react';
import Context from './Context/Context';

function Profile() {
  const { user } = useContext(Context);

  return (
    <div>
      {!user ? "Please Login" : `Welcome ${user.username}`}
    </div>
  );
}

export default Profile;
