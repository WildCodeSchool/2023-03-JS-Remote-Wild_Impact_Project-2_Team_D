import React from "react";
import logo from "@assets/logo.png";
import "@components/Header.css";
import NavBar from "@components/NavBar";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default Header;
