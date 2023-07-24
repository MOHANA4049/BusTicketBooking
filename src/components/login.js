
import * as React from 'react';
import './reg.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {setUsername,setPassword,setEmail} from './actions';
import Navbar from './navbar';
function Login({username,password,setUsername,setPassword,setEmail,email}
  )
{
  const[pass,setPass]=useState(false);
  const navigate=useNavigate();
  const check=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email:email,
          password:password
        }
        ).then((response)=>{
          console.log(response.data);
          localStorage.setItem('token',response.data.token);
          console.log(localStorage.getItem('token'));
        })
        window.alert("Sucessfully Logged In "+username);
        setPass(true);
        navigate("/");
      }
      catch(error){
        console.log(error);
        window.alert("Invalid Credentials");
    }
  }
 return(
    <>
      <Navbar/> 
    <div className="login-page1">
    <div className="form">
      <form className="login-form" onSubmit={check}>
        <br></br>
      <h2 align="center">Login</h2>
      <input type="text" placeholder="Username"value={username} onChange={(e)=>setUsername(e.target.value)} required/>
      <br></br>
      <input type="text" placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <button type="submit" className="log">Login</button>
      {(pass && (alert('Login Successful '+username)))}
      {(pass && (navigate('/')))}
      <p className="message">
        Not registered? Create an account </p>
          <Link to="/registration">
          <button type="submit" style={{textDecoration:"none"}}className="log">Signup</button>
        </Link>
    </form>
    </div>
    </div>
    </>
  )
}

// Connect component to Redux store

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    password: state.login.password,
    email: state.login.email,
  };
};

const mapDispatchToProps = {
  setUsername,
  setPassword,
  setEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);