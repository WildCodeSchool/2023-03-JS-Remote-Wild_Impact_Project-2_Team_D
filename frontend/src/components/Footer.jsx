import React from "react";
import linkedin from "@assets/linkedin.png";
import insta from "@assets/insta.png";
import facebook from "@assets/facebook.png";
import "@components/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <img className="insta" src={insta} alt="insta" />
      <img className="facebook" src={facebook} alt="facebook" />
      <img className="linkedin" src={linkedin} alt="linkedin" />
    </div>
  );
}

export default Footer;
