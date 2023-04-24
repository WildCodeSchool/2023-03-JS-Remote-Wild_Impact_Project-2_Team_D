import "@picocss/pico";

import { useState } from "react";

import BigCardBeer from "@components/BigCardBeer";
import OtherChoice from "@components/OtherChoice";
import Descriptions from "@components/Descriptions";
import Random from "@components/Random";
import beers from "@assets/beersDataBase.js";

import "@pages/page2.css";

function Page2() {
  const [randoms, setRandoms] = useState(0);
  return (
    <div data-theme="light">
      <BigCardBeer beer={beers[randoms]} />
      <Descriptions beer={beers[randoms]} />
      <OtherChoice />
      <Random randoms={randoms} setRandoms={setRandoms} beers={beers} />
    </div>
  );
}

export default Page2;
