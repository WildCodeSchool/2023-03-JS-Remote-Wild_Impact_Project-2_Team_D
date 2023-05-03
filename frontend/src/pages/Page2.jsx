import "@picocss/pico";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import BigCardBeer from "@components/BigCardBeer";
import OtherChoice from "@components/OtherChoice";
import Descriptions from "@components/Descriptions";
import Random from "@components/Random";

import "@pages/page2.css";

function Page2() {
  const [randoms, setRandoms] = useState(1);
  const [beer, setBeer] = useState();

  useEffect(() => {
    fetch(`http://localhost:5500/beers/${randoms}`)
      .then((res) => res.json())
      .then((json) => setBeer(json))
      .catch((err) => console.error(err));
  }, [randoms]);

  const location = useLocation();

  useEffect(() => {
    document.title = `Aromalt${location.pathname}`;
  }, [location.pathname]);

  return (
    <div data-theme="light">
      {beer && (
        <>
          <BigCardBeer beer={beer} />
          <Descriptions beer={beer} />
          <OtherChoice />
          <Random randoms={randoms} setRandoms={setRandoms} />
        </>
      )}
      ;
    </div>
  );
}

export default Page2;
