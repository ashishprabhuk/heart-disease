// import React, { useState } from "react";
// import { Container, Navbar } from "react-bootstrap";
// import { GiHeartOrgan } from "react-icons/gi";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div>
//       <Navbar bg="dark" data-bs-theme="dark" expand="lg" expanded={expanded} className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <GiHeartOrgan size="38px" style={{ marginRight: "10px", color: "#ff6060" }} />
//             <Link to="/" style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center" }}>
//               <h3 style={{ margin: 0, color: "#6aabff" }}>Cardio<span style={{ color: "#ff6060" }}>Check</span></h3>
//             </Link>
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

import React from "react";
import { GiHeartOrgan } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling

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
