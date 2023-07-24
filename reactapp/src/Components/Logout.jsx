import React, { useState } from 'react';
import './LoginForm.css'; 
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
      const Navigate = useNavigate();
    const eventNavigate=()=>{
        Navigate("/Home")
    }
    const eventFeedback = () => {
      Navigate("/Feed");
    }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    document.write('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="down">
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" onClick={eventNavigate}>Login</button>
        <div className="button">
            <center><a href='/signup'>Don't you have account?</a></center>
         </div>
         <div className="but4">
            <button type='submit' onClick={eventFeedback}>Feedback</button>
          </div>
      </form>
    </div>
    </div>
  
  );
};

export default Logout;
