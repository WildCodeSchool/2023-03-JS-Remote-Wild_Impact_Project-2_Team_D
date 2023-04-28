import React from "react";
import "@components/BigCardBeer.css";

function BigCardBeer({ beer }) {
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
