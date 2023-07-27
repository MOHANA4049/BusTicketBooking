import React from "react";
import Navbar from "./navbar";
import './feedback.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Feedback(){
    const navigate=useNavigate();
    const[pass,setPass]=useState(true);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[msg,setMsg]=useState('');
    const data={
        email:email,
        feedback:msg,
    }
    const check=async(e)=>{
        const token = localStorage.getItem('token');
        console.log(token);
        try{
          const response=await axios.post("http://localhost:8080/api/v1/users/addUserFeedback",data,{
                headers: {
                    "cache-control": 'no-cache',
                    "Authorization": `Bearer ${token}`,
                  },
            });
            console.log('Response:', response.data);
            if(response.status==200)
            {
            window.alert("Thanks for your feedback!!!");
            // {(pass&& (alert("Thanks for your feedback!!!")))};
            navigate("/");
            }
        }
        catch(error){
            console.log(error);
            window.alert("Please enter feedback");
        }
    }
    return(
        <div>
            <Navbar/>
            <br></br>
            <form onSubmit={check}>
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