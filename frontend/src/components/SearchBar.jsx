import React, { useState, useEffect } from "react";
import "@components/SearchBar.css";

function searchBar() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/beers`)
      .then((response) => response.json())
      .then((json) => setBeers(json))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {};

  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <input
          type="text"
          // value={beers}
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearch}
        />
      </div>
      <ul className="results">
        {beers.slice(0, 5).map((beer) => (
          <li className="result" key={beer.id}>
            <h4>{beer.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default searchBar;
