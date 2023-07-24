import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const Buses = ({source,destination}) =>{
  const[posts,setPosts]=useState([]);
  
  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get(`http://localhost:8080/api/getbus/${source}/${destination}`, {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setPosts(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {posts.map((post, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.content}>
            <h2 style={styles.title}>{post.busname}</h2>
            <br></br>
            <pre>     Source:{post.source}</pre>
             <pre>    Destination:{post.destination}</pre>
            <pre>     Date:{post.date}</pre>
            <pre>     ArrivalTime:{post.arrivaltime}</pre>
            <pre>     DepartureTime:{post.departuretime}</pre>
            <pre>     BusType: {post.busType}</pre>
            <pre>     BusFare: {post.busFare}</pre>
            <pre>     SeatAvailability: {post.seatAvail}</pre>
            <br></br>
            <Link to="/seat"><button style={styles.button}>VIEW SEATS</button></Link>
            <br></br><br></br>
          </div>
        </div>
      ))}
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  content: {
    padding: "10px",
    backgroundColor: "rgba(211, 211, 211, 0.7)",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "Times New Roman, serif",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "lightgreen" ,
    color: "black",
    border: "none",
    padding: "8px 16px",
    borderRadius: "50px",
    cursor: "pointer",
    marginLeft: "calc(50% - 70px)",
  },
}
const mapStateToProps = (state) => {
  return {
    source: state.login.source,
    destination: state.login.destination,
  };
};
export default connect(mapStateToProps)(Buses);
// export default Buses;