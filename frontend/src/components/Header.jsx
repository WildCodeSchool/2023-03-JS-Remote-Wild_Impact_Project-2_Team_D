import React from "react";
import logo from "@assets/logo.png";
import loupe from "@assets/loupe.png";
import shop from "@assets/shop.png";
import "@components/Header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <div className="bouton">
        <img className="loupe" src={loupe} />
        <img className="shop" src={shop} />
      </div>
    </div>
  );
}

export default Header;
