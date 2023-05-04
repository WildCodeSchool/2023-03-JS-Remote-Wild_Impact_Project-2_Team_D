import "@picocss/pico";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BigCardBeer from "@components/BigCardBeer";
import OtherChoice from "@components/OtherChoice";
import Descriptions from "@components/Descriptions";
import Random from "@components/Random";

import "@pages/page2.css";

function Page2({ addToCart }) {
  const { id } = useParams();
  const [beer, setBeer] = useState();

  useEffect(() => {
    fetch(`http://localhost:5500/beers/${id}`)
      .then((res) => res.json())
      .then((json) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setBeer(json);
        document.title = `Aromalt -${json.name}`;
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div data-theme="light">
      {beer && (
        <>
          <BigCardBeer beer={beer} addToCart={addToCart} />
          <Descriptions beer={beer} />
          <OtherChoice />
          <Random />
        </>
      )}
      ;
    </div>
  );
}

export default Page2;
