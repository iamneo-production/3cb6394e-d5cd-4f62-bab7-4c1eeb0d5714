import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Components/api';
// import axios from axios;
// import { addStudent } from '../Components/api';
const Signup = () => {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastName] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const[formdata,setFormdata]= useState({
    firstName: '',
    phoneNumber: '',
    emailId: '',
    lastName: '',
    password: ''
  })

  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addStudent(formdata);
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }

  // const eventNavigate = () => {
  //   Navigate("/");
  // };

  // const handleFirstname = (event) => {
  //   setFirstname(event.target.value);
  // };

  // const handleLastname = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handlePhonenumber = (event) => {
  //   setPhonenumber(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   console.log('Successfully registered');
  //   console.log('FirstName: ', firstname);
  //   console.log('LastName:', lastname);
  //   console.log('PhoneNumber:', phonenumber);
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  //   console.log('Confirm Password:', confirmPassword);

  //   Navigate('/');

  // };

  return (
    <div className="down">
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id='firstName'
            placeholder="FirstName"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id='lastName'
            placeholder="LastName"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id='phoneNumber'
            name='phonenumber'
            placeholder="PhoneNumber"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id='emailId'
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id='password'
            placeholder="Password"
            onChange={handleChange}
            required
          />
          {/* <input
            type="password"
            id='confirmPassword'
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            required
          /> */}
 
          <button type="submit" onChange={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
