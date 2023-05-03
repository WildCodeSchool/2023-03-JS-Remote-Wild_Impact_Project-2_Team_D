import { useNavigate } from "react-router-dom";
import "@components/Random.css";

function Random() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Description/${Math.floor(Math.random() * 50 + 1)}`);
  };

  return (
    <div className="beerRandom">
      <h5>
        Pas d'idée ou envies d'une nouvelle saveur ? Laisse-toi tenter en un
        click...
      </h5>

      <button
        className="buttonRandom"
        type="button"
        onClick={() => handleClick()}
      >
        Try it!
      </button>
    </div>
  );
}

export default Random;
