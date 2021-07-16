import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      Meteor.loginWithPassword(username, password);
    }

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div className="login-field">
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-field">
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-button">
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
