// import React, { useState, useEffect } from "react";
import "@components/BigCardBeer.css";

function BigCardBeer({ beer }) {
  //   const [beers, setBeers] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:5500/beers/:id`)
  //       .then((res) => res.json())
  //       .then((json) => setBeers(json))
  //       .catch((err) => console.error(err));
  //   }, []);

  return (
    <div className="main">
      <div className="price">
        <strong>{beer.price_per_liter}€</strong>
      </div>
      <article className="card">
        <div className="slogan">
          <h3>{beer.tagline}</h3>
        </div>
        <div className="imageMain">
          <img
            className="imageBeer"
            src={beer.image_url}
            alt="ceci est une bière, glou glou"
          />
        </div>
        <p className="nbrBeer">x12</p>
      </article>
      <nav className="panierMain">
        <ul>
          <li>
            <button className="buttonMain" type="button">
              <strong>Ajouter au panier</strong> +
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BigCardBeer;
