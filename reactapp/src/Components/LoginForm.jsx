import React, { useState } from 'react';
// import { addStudent } from './api';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
// import { addStudent } from './api';
const LoginForm = () => {
  // const [name, setName] = useState('');
  const[email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const eventNavigate = () => {
    Navigate("/Home");
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
    // if (!email || !password) {
    //   alert("please enter Email and password.");
    //   return;
    // }
    // Add your login logic here`
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
    //  Navigate('/Home')
  };
  // const check = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8181/api/v1/auth/authenticate",
  //       {
  //         name: name,
  //         email: email,
  //         password: password,
  //       }
  //     );

  //     console.log(response.data);
  //     localStorage.setItem('token', response.data.token);
  //     console.log(localStorage.getItem('token'));

  //     window.alert("Successfully Logged In");



  //     navigate("/Intermediate");
  //   } catch (error) {
  //     console.log(error);
  //     window.alert("Invalid Credentials");
  //   }
  // };

  return (
    <div className="down">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={eventNavigate}>
          <input
            type="email"
            placeholder="Email"
            // value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            // value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type='submit'>Login</button>
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

export default LoginForm;
