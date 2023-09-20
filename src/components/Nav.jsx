import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between align-between items-center mb-8">
      <div className="text-3xl font-bold">BlogVista</div>
      <div className="flex gap-4">
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
};

export default Nav;
