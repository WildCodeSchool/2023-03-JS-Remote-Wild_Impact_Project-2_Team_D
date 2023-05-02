import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/Description">Description </Link>
      <Link to="/Cart">Panier</Link>
    </nav>
  );
}

export default NavBar;
