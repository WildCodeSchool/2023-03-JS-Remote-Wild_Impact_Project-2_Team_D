import React from "react";
import logo from "@assets/logo.png";
import loupe from "@assets/loupe.png";
import shop from "@assets/shop.png";
import "@components/Header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="bouton">
        <img className="loupe" src={loupe} alt="loupe" />
        <img className="shop" src={shop} alt="shop" />
      </div>
    </div>
  );
}

export default Header;