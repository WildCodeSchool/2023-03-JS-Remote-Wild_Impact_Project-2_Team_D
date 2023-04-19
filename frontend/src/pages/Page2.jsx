import "./page2.css";
import "@picocss/pico";
import BigCardBeer from "../components/BigCardBeer";
import OtherChoice from "../components/OtherChoice";
import Descriptions from "../components/Descriptions";

function Page2() {
  return (
    <div data-theme="light">
      <BigCardBeer />
      <Descriptions />
      <OtherChoice />
    </div>
  );
}

export default Page2;
