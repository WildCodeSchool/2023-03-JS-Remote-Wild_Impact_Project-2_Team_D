import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@components/SearchBar.css";

function searchBar() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search !== "") {
      fetch(`http://localhost:5500/beers?name=${search}`)
        .then((response) => response.json())
        .then((json) => setBeers(json))
        .catch((err) => console.error(err));
    } else {
      setBeers([]);
    }
  }, [search]);

  return (
    <div className="searchBar">
      <input
        type="text"
        value={search}
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="results">
        {beers.map((beer) => (
          <Link to={`/Description/${beer.id}`}>
            <li className="result" key={beer.id}>
              <h4>{beer.name}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default searchBar;
