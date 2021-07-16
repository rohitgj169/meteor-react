import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export default function LoginForm({setShowLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Accounts.createUser({
      username: username,
      password: password,
    });
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div className="login-field">
        <input 
          name="email"
          type="text"
          placeholder="Enter Email"
          required
          onChange = { (e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-field">
        <input 
          name="password"
          type="password"
          placeholder="Enter Password"
          required
          onChange = { (e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-button">
        <button type="submit">Sign Up</button>
      </div> 
    </form>
  );
}
