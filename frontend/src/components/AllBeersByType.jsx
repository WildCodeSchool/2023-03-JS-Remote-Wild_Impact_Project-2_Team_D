import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default AllBeersByType;
