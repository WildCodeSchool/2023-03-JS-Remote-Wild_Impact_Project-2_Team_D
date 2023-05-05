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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          condimentum dignissim ante quis ornare. Duis vestibulum tincidunt
          nisl, sed ultrices ligula bibendum a. Donec id massa vitae risus
          tincidunt lacinia ut laoreet nibh. Etiam tincidunt egestas purus,
          vitae eleifend erat lacinia dictum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum venenatis tincidunt iaculis. Cras at turpis nec est varius
          aliquet ac quis erat. Duis faucibus, leo at efficitur tempus, est
          libero finibus velit, in fringilla ipsum ipsum ut ligula. Donec
          laoreet, justo sed tristique dapibus, mi eros ultricies dolor, non
          lobortis lacus elit quis diam.
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
