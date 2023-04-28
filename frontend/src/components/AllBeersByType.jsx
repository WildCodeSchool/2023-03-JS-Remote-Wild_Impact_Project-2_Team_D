import React from "react";
import shop2 from "@assets/shop2.png";
import "@components/AllBeersByType.css";
import beers from "../assets/beersDataBase";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function AllBeersByType({ title, cls, type }) {
  const colors = [
    "#ffb4b4",
    "#bbf0f4",
    "#fff6a6",
    "#d4eadf",
    "#ffdeb4",
    "#b2a4ff",
  ];

  const getRandom = () => {
    return Math.floor(Math.random() * colors.length);
  };

  return (
    <div className="containerBeer">
      <h2 className="titleHome">{title}</h2>
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={100}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className={cls}>
              {beers.slice(0, 3).map((beer) => (
                <article
                  className="oneBeer"
                  style={{ backgroundColor: colors[getRandom()] }}
                  key={beer.id}
                  // style={Math.random()}
                >
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
          </Slide>
          <Slide index={1}>
            <div className={cls}>
              {beers.slice(0, 3).map((beer) => (
                <article
                  className="oneBeer"
                  style={{ backgroundColor: colors[getRandom()] }}
                  key={beer.id}
                >
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
          </Slide>
          <Slide index={2}>
            <div className={cls}>
              {beers.slice(0, 3).map((beer) => (
                <article
                  className="oneBeer"
                  style={{ backgroundColor: colors[getRandom()] }}
                  key={beer.id}
                >
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
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default AllBeersByType;
