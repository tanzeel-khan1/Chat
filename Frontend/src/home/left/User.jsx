import React from "react";
import Users from "../Users";

const User = () => {
  return (
    <div
      style={{ maxHeight: "calc(84vh - 10vh)" }}
      className="flex-babar overflow-y-auto"
    >
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
    </div>
  );
};

export default User;
