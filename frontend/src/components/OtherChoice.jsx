import "@components/OtherChoice.css";
import "@components/AllBeersByType.css";
import AllBeersByType from "@components/AllBeersByType";

function OtherChoice() {
  return (
    <div className="otherChoice">
      <h5>Vous aimerez également</h5>
      <AllBeersByType cls="bruneBeers" type="Braun" />
    </div>
  );
}
export default OtherChoice;
