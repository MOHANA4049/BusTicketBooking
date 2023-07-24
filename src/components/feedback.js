import React from "react";
import Navbar from "./navbar";
import './feedback.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Feedback(){
    const navigate=useNavigate();
    const[pass,setPass]=useState(true);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[msg,setMsg]=useState('');
    const handleSubmit=()=>{
        alert("Thanks for your feedback!!!");
        {pass && navigate("/")}
    }
    return(
        <div>
            <Navbar/>
            <br></br>
            <form onSubmit={handleSubmit}>
          <div className="k1">
            <br></br><br></br>
            <input type="text" className="us"size="30" placeholder="Username" onChange={(e)=>setName(e.target.value)} required/><br/><br/>
            <input type="text" className="em" size="30" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>
            <textarea  className="m" rows="4" cols="30" placeholder="Message"  onChange={(e)=>setMsg(e.target.value)}required/><br/>
            <br></br>
             <button className="last"type="submit">Submit</button>
             <br></br><br></br>
        </div>
        </form>
        </div>
    )
}
export default Feedback;