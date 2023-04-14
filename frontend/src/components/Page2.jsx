import "./page2.css";
import "@picocss/pico";
import MainPage2 from "./MainPage2";
import DescriptionPage2 from "./DescriptionPage2";
import ChoixPage2 from "./ChoixPage2";

function Page2() {
  return (
    <div data-theme="light">
      <MainPage2 />
      <DescriptionPage2 />
      <ChoixPage2 />
    </div>
  );
}

export default Page2;
