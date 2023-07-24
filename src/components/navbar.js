import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Navbar({ username }) {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  return (
    <div>
      <div className="nav">
        <div id="mySidepanel" className="sidepanel">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            x
          </a>
          <Link to="/feedback">Feedback</Link>
          <a>Bookings</a>
          <Link to="/download">Download</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="openbtn" onClick={openNav}>
          &#9776;
        </button>
        <h3>BOOKMYBUS</h3>
        <ul className="list">
          <li className="nav-item">
            <button className="bt">
              <Link to="/about">ABOUT</Link>
            </button>
          </li>
          <li className="nav-item" style={{ textDecoration: "none" }}>
            <button className="bt1">
              <Link to="/">
                <a>HOME</a>
              </Link>
            </button>
          </li>
          <li className="nav-item" style={{ textDecoration: "none" }}>
            <button className="bt2">
              <Link to="/login">LOGIN/REGISTER</Link>
            </button>
          </li>
          <li className="nav-item" >
          <button className="bt">
              <Link to="/">{username}</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
  };
};

export default connect(mapStateToProps)(Navbar);
