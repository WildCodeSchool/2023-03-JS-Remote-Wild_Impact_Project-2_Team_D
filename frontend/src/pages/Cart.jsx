import { useState, useEffect } from "react";
import "./Cart.css";
import BeerBasketCard from "@components/BasketBeerItem";

function CartPage({ addToCart, removeFromCart, deleteFromCart, cart }) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const requests = cart.map((article) =>
      fetch(`http://localhost:5000/beers/${article.id}`)
        .then((res) => res.json())
        .then((json) => ({ ...json, ...article }))
        .catch((err) => console.error(err))
    );
    Promise.all(requests).then((data) =>
      setBeers(data.sort((a, b) => a.createdAt - b.createdAt))
    );
    document.title = `Aromalt - Panier`;
  }, [cart]);

  const totalTtcAround = beers
    .reduce((acc, beer) => acc + beer.quantity * beer.price_per_liter * 0.33, 0)
    .toFixed(2);

  return (
    <div className="CartPage">
      <h1 className="h1CartPage">Mon panier</h1>
      {beers.map((beer) => (
        <BeerBasketCard
          key={beer.id}
          beer={beer}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
        />
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
