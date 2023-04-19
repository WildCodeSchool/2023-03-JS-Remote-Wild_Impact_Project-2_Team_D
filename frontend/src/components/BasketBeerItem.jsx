import { useState } from "react";

import "@pages/Cart.css";

import bin from "@assets/bin.png";
import plus from "@assets/plus.png";
import moins from "@assets/moins.png";

function BeerBasketCard({ beer }) {
  const priceByBottleAround = beer.price_per_liter * (0.33).toFixed(2);

  const [addBeer, setAddBeer] = useState(1);

  return (
    <div className="basketItem">
      <div className="beerListItem">
        <img
          src={beer.image_url}
          alt="bière {beer.name}"
          className="imgBeerBasket"
        />
        <div className="beerDetailList">
          <div className="beerDetailItem">
            <p className="beerBasketName">{beer.name}</p>
            <p className="beerBasketDetail">Quantité : {addBeer}</p>
            <p className="beerBasketDetail">Volume : 33 cl</p>
            <div>
              <p className="beerBasketDetail">
                Prix au litre : <span>{beer.price_per_liter} €</span>
              </p>
            </div>
          </div>

          <div className="basketIcons">
            <div>
              <button
                className="basketIcon"
                type="button"
                onClick={() => setAddBeer((numberBeer) => numberBeer - 1)}
              >
                <img src={moins} alt="Less" />
              </button>
            </div>
            <div>
              <button
                className="basketIcon"
                type="button"
                onClick={() => setAddBeer((numberBeer) => numberBeer + 1)}
              >
                <img src={plus} alt="Add" />
              </button>
            </div>
            <div>
              <button
                className="basketIcon"
                type="button"
                onClick={() => setAddBeer(0)}
              >
                <img src={bin} alt="Bin" />
              </button>
            </div>
          </div>
        </div>
        <div className="ttcByBeer">
          <p>Total : {(addBeer * priceByBottleAround).toFixed(2)} €</p>
        </div>
      </div>
    </div>
  );
}

export default BeerBasketCard;
