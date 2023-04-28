import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import shop2 from "@assets/shop2.png";
import "@components/AllBeersByType.css";

function AllBeersByType({ title, cls, type }) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/beers?type=${type}`)
      .then((res) => res.json())
      .then((json) => setBeers(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="containerBeer">
      <h2 className="titleHome">{title}</h2>
      <div className={cls}>
        {beers
          .filter((beer) => beer.type === type)
          .slice(0, 3)
          .map((beer) => (
            <article className="oneBeer" key={beer.id}>
              <div className="headerCard">
                <button type="button">
                  <img className="shop2" src={shop2} alt="shop" />
                </button>
              </div>
              <img src={beer.image_url} alt={beer.id} />
              <div className="footerCard">
                <Link to={`/Description/${beer.id}`}>
                  <p>+ d'infos</p>
                </Link>
                <p>x12</p>
              </div>
              <div className="beerName">
                <h3>{beer.name}</h3>
                <h3>10e</h3>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}

export default AllBeersByType;
