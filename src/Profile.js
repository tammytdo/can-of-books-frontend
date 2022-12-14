import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        {<h2>{user.email.charAt(0).toUpperCase()+user.email.slice(1)}</h2>}
      </div>
    )
  );
};

export default Profile;