import "./Cart.css";
import BeerBasketCard from "@components/BasketBeerItem";
import beers from "@assets/beersDataBase";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const totalTtcAround = "€€€";

function CartPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = `Aromalt${location.pathname}`;
  }, [location.pathname]);

  return (
    <div className="CartPage">
      <h1 className="h1CartPage">Mon panier</h1>
      {beers.slice(0, 8).map((beer) => (
        <BeerBasketCard key={beer.id} beer={beer} />
      ))}

      <div className="continueButtonAndTTC">
        <button type="button" className="continuePurchases">
          CONTINUER VOS ACHATS
        </button>
        <div className="priceTotalBeers">Total : {totalTtcAround} €</div>
      </div>
      <div className="command">
        <button type="button" className="commandButton">
          PASSER LA COMMANDE
        </button>
      </div>
    </div>
  );
}

export default CartPage;
