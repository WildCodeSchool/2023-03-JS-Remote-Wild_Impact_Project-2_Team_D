import React from "react";
import shop2 from "@assets/shop2.png";
import "@components/AllBeersByType.css";
import beers from "../assets/beersDataBase";

function AllBeersByType({ title, cls, type }) {
  return (
    <div className="containerBeer">
      <h2 className="titleHome">{title}</h2>
      <div className={cls}>
        {beers
          .filter((beer) => beer.type === type)
          .slice(0, 3)
          .map((beer) => (
            <article key={beer.id}>
              <div className="headerCard">
                <button type="button">
                  <img className="shop2" src={shop2} alt="shop" />
                </button>
              </div>
              <img src={beer.image_url} alt={beer.id} />
              <div className="footerCard">
                <button type="button">
                  <p>+ d'infos</p>
                </button>
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
