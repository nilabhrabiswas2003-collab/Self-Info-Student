import { useEffect, useState } from "react";
import { getProfile } from "../services/authService.js";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then((res) => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
