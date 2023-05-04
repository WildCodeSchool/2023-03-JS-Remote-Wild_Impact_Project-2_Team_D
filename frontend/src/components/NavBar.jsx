import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("home");
  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("home");
    }
    if (location.pathname === "/Cart") {
      setActivePage("cart");
    }
    if (location.pathname === "/Description") {
      setActivePage("description");
    }
  }, [location]);

  return (
    <div className="navElement">
      <div className="navItem">
        <Link to="/">Home </Link>
        <div className={`underline ${activePage === "home" ? "active" : ""}`} />
      </div>
      <div className="navItem">
        <Link to="/Description">Description </Link>
        <div
          className={`underline ${
            activePage === "description" ? "active" : ""
          }`}
        />
      </div>
      <div className="navItem">
        <Link to="/Cart">Panier</Link>
        <div className={`underline ${activePage === "cart" ? "active" : ""}`} />
      </div>
    </div>
  );
}

export default NavBar;
