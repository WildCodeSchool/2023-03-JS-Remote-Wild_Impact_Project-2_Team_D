import "@picocss/pico";

import { useState } from "react";

import BigCardBeer from "@components/BigCardBeer";
import OtherChoice from "@components/OtherChoice";
import Descriptions from "@components/Descriptions";
import Random from "@components/Random";
import Beers from "@assets/beersDataBase.jsx";

import "@pages/page2.css";

function Page2() {
  const [randoms, setRandoms] = useState(0);
  return (
    <div data-theme="light">
      <BigCardBeer beer={Beers[randoms]} />
      <Descriptions beer={Beers[randoms]} />
      <OtherChoice />
      <Random randoms={randoms} setRandoms={setRandoms} beers={Beers} />
    </div>
  );
}

export default Page2;
