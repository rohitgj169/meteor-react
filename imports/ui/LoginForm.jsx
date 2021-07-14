import { Meteor } from 'meteor/meteor';
import React, {useState } from 'react';

export default function LoginForm() {

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input 
        name="username"
        type="text"
        placeholder="Enter Username"
        required
        onChange = { (e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input 
        name="password"
        type="text"
        placeholder="Enter Password"
        required
        onChange = { (e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  )
}
