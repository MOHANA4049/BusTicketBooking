import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useState } from "react";
import {connect} from "react-redux";
import { useNavigate } from "react-router-dom";
import {setSource,setDestination} from "./actions";
function Homepage({source,destination,setSource,setDestination}){
  const [date, setDate] = useState("");
  const navigate=useNavigate();
  // const handleSourceChange = (event) => {
  //   setSource(event.target.value);
  // };

  // const handleDestinationChange = (event) => {
  //   setDestination(event.target.value);
  // };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
    return(
      <div>
      <Navbar/>
      <form >
       <div className="box">
        <input className="b1" type="text" placeholder="Source" name="source" value={source} onChange={(e)=>setSource(e.target.value)} required/>
        <input className="b2"type="text" placeholder="Destination" name="destination" value={destination}  onChange={(e)=>setDestination(e.target.value)} required/>
        <input className="b3"type="date" value={date} onChange={handleDateChange}required/>
        <Link to="/buses"><button className="search" type="submit">SearchBuses</button></Link>
        </div>
        </form>
      <div className="below">
        <br></br>
        <h1 align="center" style={{color:"black"}}>Plan Your Travel with Confidence!!!</h1>
      <img className="t"style={{width:"350px",height:"250px"}} src="/images/bus1.jpeg"
        alt="Lago di Braies"
      />
       <img className="t"style={{width:"350px",height:"250px"}}
        src="/images/b2.jpeg"
        alt="Lago di Braies"
      />
       <img className="t"style={{width:"350px",height:"250px"}}
        src="/images/b4.jpeg"
        alt="Lago di Braies"
      />
      </div>
      </div>
    );
}
const mapStateToProps = (state) => {
  return {
    source: state.login.source,
    destination: state.login.destination,
  };
};

const mapDispatchToProps = {
  setSource,
  setDestination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);