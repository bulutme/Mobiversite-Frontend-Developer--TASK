import React from "react";
import UserCard from "./UserCard";

const Users = () => {
  return (
    <div className="users">
      <div className="users-bar">
        <h4>Populer Users</h4>
      </div>
      <div className="users-card">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Users;
