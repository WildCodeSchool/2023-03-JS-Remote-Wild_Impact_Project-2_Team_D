import "./Cart.css";
import BeerBasketCard from "@components/BasketBeerItem";

const beers = [
  {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    price_per_liter: 9.7,
    attenuation_level: 75,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 2,
    name: "Trashy Blonde",
    tagline: "You Know You Shouldn't",
    first_brewed: "04/2008",
    description:
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    image_url: "https://images.punkapi.com/v2/2.png",
    abv: 4.1,
    ibu: 41.5,
    target_fg: 1010,
    target_og: 1041.7,
    ebc: 15,
    srm: 15,
    ph: 4.4,
    price_per_liter: 10,
    attenuation_level: 76,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 18,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 3,
    name: "Berliner Weisse With Yuzu - B-Sides",
    tagline: "Japanese Citrus Berliner Weisse.",
    first_brewed: "11/2015",
    description:
      "Japanese citrus fruit intensifies the sour nature of this German classic.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.2,
    ibu: 8,
    target_fg: 1007,
    target_og: 1040,
    ebc: 8,
    srm: 4,
    ph: 3.2,
    price_per_liter: 12.6,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
      twist:
        "Soured naturally using the kettle souring technique, Yuzu fruit: 50g at middle, Yuzu juice: 200ml at FV",
    },
    brewers_tips:
      "Clean everything twice. All you want is the clean sourness of lactobacillus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];

const totalTtcAround = "€€€";

function CartPage() {
  return (
    <div className="CartPage">
      <h1 className="h1CartPage">Mon panier</h1>
      {beers.map((beer) => (
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
