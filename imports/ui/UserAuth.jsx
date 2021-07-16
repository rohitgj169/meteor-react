import React, {useState} from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


export default function UserAuth() {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-container">
      <h3>{showLogin ? 'LOG IN' : 'SIGN UP'}</h3>
      {showLogin ? <LoginForm /> : <SignUpForm setShowLogin={setShowLogin}/>}
      <p>{showLogin ? "If you do not have an account click" : "If you already have an account click"} <span onClick={() => setShowLogin(!showLogin)}>here</span></p>
    </div>
  )
}
