import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(false);
  const navigate=useNavigate();
  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/buses");
  };
    return(
      <div>
      <form onSubmit={handleSubmit}>
       <div className="box">
        <input className="b1" type="text" placeholder="Source"  value={source} onChange={handleSourceChange} required/>
        <input className="b2"type="text" placeholder="Destination" value={destination} onChange={handleDestinationChange}  required/>
        <input className="b3"type="date" value={date} onChange={handleDateChange}required/>
        <button className="search" type="submit">SearchBuses</button>
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
export default Home;