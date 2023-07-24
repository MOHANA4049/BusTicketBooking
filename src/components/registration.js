import React, { useState } from 'react';
// import './reg.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [pass, setPass] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((fields) => ({ ...fields, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     if(validateForm())
     {
      const data = {
        name: fields.username,
        mobile: fields.mobileno,
        email: fields.email,
        gender: fields.gender,
        password: fields.password
      };
      axios.post('http://127.0.0.1:8080/api/v1/auth/register',data)
      setPass(true);
     }
    
  };

  const validateForm = () => {
    let formIsValid = true;
    let formErrors = {};

    if (!fields.username) {
      formIsValid = false;
      formErrors.username = '*Please enter your username.';
    }

    if (typeof fields.username !== 'undefined') {
      if (!fields.username.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        formErrors.username = '*Please enter alphabet characters only.';
      }
    }

    if (!fields.gender) {
      formIsValid = false;
      formErrors.gender = '*Please enter your gender.';
    }

    if (!fields.mobileno) {
      formIsValid = false;
      formErrors.mobileno = '*Please enter your mobile no.';
    }

    if (typeof fields.mobileno !== 'undefined') {
      if (!fields.mobileno.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        formErrors.mobileno = '*Please enter a valid mobile no.';
      }
    }

    if (!fields.password) {
      formIsValid = false;
      formErrors.password = '*Please enter your password.';
    }

    if (typeof fields.password !== 'undefined') {
      if (!fields.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/)){
      formIsValid = false;
        formErrors.password = '*Please enter a secure and strong password.';
      }
    }

    setErrors(formErrors);
    return formIsValid;
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2 align="center">Registration</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={fields.username || ''}
              onChange={handleChange}
              required
            />
            <div className="errorMsg">{errors.username}</div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={fields.email || ''}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={fields.gender || ''}
              onChange={handleChange}
              required
            />
            <div className="errorMsg">{errors.gender}</div>
            <input
              type="number"
              name="mobileno"
              placeholder="MobileNo"
              value={fields.mobileno || ''}
              onChange={handleChange}
              required
            />
            <div className="errorMsg">{errors.mobileno}</div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={fields.password || ''}
              onChange={handleChange}
              required
            />
            <div className="errorMsg">{errors.password}</div>
            <button type="submit" className="log">
              Signin
            </button>
            {pass && alert('Your Form has been submitted successfully.')}
            {pass && navigate("/")}
            <p className="message">
              Already registered?
              <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;