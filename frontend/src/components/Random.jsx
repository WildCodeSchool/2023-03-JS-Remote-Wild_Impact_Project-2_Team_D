import "@components/Random.css";

function Random({ beers, setRandoms }) {
  const handleClick = () => {
    setRandoms(Math.floor(Math.random() * (beers.length - 1) + 1));
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
