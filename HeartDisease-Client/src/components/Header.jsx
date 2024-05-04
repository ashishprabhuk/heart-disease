import React from "react";
import { GiHeartOrgan } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <GiHeartOrgan
            size="38px"
            style={{ marginRight: "10px", color: "#ff6060" }}
          />
        </Link>
        <Link to="/" className="nav-links">
          <h3 style={{ margin: 0, color: "#6aabff" }}>
            Cardio<span style={{ color: "#ff6060" }}>Check</span>
          </h3>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
