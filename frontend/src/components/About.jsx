import React from "react";
import about from "@assets/about.jpg";
import adrien from "@assets/adrien.png";
import benoit from "@assets/benoit.png";
import nico from "@assets/nico.png";
import flo from "@assets/flo.png";
import "@components/About.css";

function About() {
  return (
    <div className="about">
      <h2 className="titleabout">A propos</h2>
      <div className="history">
        <img className="about" src={about} alt="about" />
        <p>
          Nous sommes ravis de vous présenter Aromalt, notre site de vente en
          ligne de bières fondé par quatre étudiants en développement web
          passionnés par les bières de qualité. Aromalt a pour mission de
          proposer une sélection de bières uniques et savoureuses. Nous
          proposons une variété soigneusement sélectionnées pour leur goût
          exceptionnel et leur qualité. Nous sommes persuadés que vous trouverez
          sur Aromalt des bières qui vous plairont, et nous serions honorés de
          vous compter parmi nos clients fidèles. N'hésitez pas à nous contacter
          si vous avez des questions ou des commentaires !
        </p>
      </div>
      <div className="team">
        <h3>Notre équipe</h3>
        <img className="team" src={flo} alt="team" />
        <img className="team" src={benoit} alt="team" />
        <img className="team" src={adrien} alt="team" />
        <img className="team" src={nico} alt="team" />
      </div>
    </div>
  );
}

export default About;
