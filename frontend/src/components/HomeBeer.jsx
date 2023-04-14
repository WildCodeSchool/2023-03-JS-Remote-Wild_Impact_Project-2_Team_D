import React from "react";
import "@components/HomeBeer.css";

const beers = [
  {
    id: 8,
    name: "Fake Lager",
    tagline: "Bohemian Pilsner.",
    first_brewed: "03/2013",
    description:
      "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
    image_url: "https://images.punkapi.com/v2/8.png",
    abv: 4.7,
    ibu: 40,
    target_fg: 1010,
    target_og: 1046,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    price_per_liter: 5.4,
    attenuation_level: 78,
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
          value: 10,
          unit: "celsius",
        },
      },
      twist: null,
    },
    brewers_tips:
      "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
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
    id: 6,
    name: "Electric India",
    tagline: "Vibrant Hoppy Saison.",
    first_brewed: "05/2013",
    description:
      "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
    image_url: "https://images.punkapi.com/v2/6.png",
    abv: 5.2,
    ibu: 38,
    target_fg: 1005,
    target_og: 1045,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    price_per_liter: 11.2,
    attenuation_level: 88.9,
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
          value: 22,
          unit: "celsius",
        },
      },
      twist: "Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins",
    },
    brewers_tips:
      "Source some really good heather honey to get the right spicy esters in the beer.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];

function HomeBeer() {
  return (
    <div className="containerBeer">
      <h2 className="titleHome">Nos bières Brunes</h2>
      <div className="bruneBeers">
        {beers.map((beer) => (
          <card key={beer.id}>
            <div className="headerCard">
              <button type="button">+</button>
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
          </card>
        ))}
      </div>
      <h2 className="titleHome">Nos bières Blondes</h2>
      <div className="bruneBeers">
        {beers.map((beer) => (
          <card key={beer.id}>
            <div className="headerCard">
              <button type="button">+</button>
            </div>
            <img src={beer.image_url} alt={beer.id} />
            <div className="footerCard">
              <button type="button">
                <p>+ d'infos</p>
              </button>
              <p>x12</p>
            </div>
            <div className="beerName">
              <h3>{beers.name}</h3>
              <h3>10e</h3>
            </div>
          </card>
        ))}
      </div>
      <h2 className="titleHome">Nos bières Blanches</h2>
      <div className="bruneBeers">
        {beers.map((beer) => (
          <card key={beer.id}>
            <div className="headerCard">
              <button type="button">+</button>
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
          </card>
        ))}
      </div>
    </div>
  );
}

export default HomeBeer;
