import React from "react";
import Navbar from "./navbar";
import './feedback.css';
function Download(){
return(
    <div>
    <Navbar/>
    <br></br>
    <form>
  <div className="k1">
    <br></br><br></br>
    <input type="text" className="us"size="30" placeholder="Username" required/><br/><br/>
    <input type="text" className="em" size="30" placeholder="Email" required/><br/><br/>
    <br></br>
     <button className="last">Download</button>
     <br></br><br></br>
</div>
</form>
</div>
)
}
const styles = {
    head: {
        color:"pink",
    },
    d:{
        border: "none",
        fontSize: "14px",
        padding: "16px",
        borderRadius: "10px",
        border: "0px",
        marginLeft: "150px",
        resize: "none",
        boxShadow: "0px 7px 7px 0px rgba(0, 0, 0, 0.04)",
        //   width: "300px",
        //   border: "1px solid #ccc",
        //   borderRadius: "8px",
        //   margin: "100px",
        //   overflow: "hidden",
        //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        //   margin:"150px",
        //   marginLeft:"150px",
        //   backgroundColor:"white",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "50px",
      cursor: "pointer",
      margin:"8px",
    },
  }
  export default Download;