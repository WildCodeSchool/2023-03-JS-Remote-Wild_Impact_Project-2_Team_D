const express = require("express");

const router = express.Router();

const connexion = require("./connexion");

connexion
  .getConnection()
  .then((el) => {
    console.info(
      `Connexion to the DB with the id ${el.connection.connectionId}`
    );
  })
  .catch((err) => console.error(err));

const welcome = (req, res) => {
  res.send("Hello");
};

const getBeers = (req, res) => {
  let url = "SELECT * FROM beers";
  const value = [];
  if (req.query.type) {
    url += " WHERE type = ?";
    value.push(req.query.type);
  }

  connexion
    .query(url, value)
    .then(([beers]) => {
      res.json(beers);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getBeersById = (req, res) => {
  const { id } = req.params;

  connexion
    .query("SELECT * FROM beers WHERE id = ?", [id])
    .then(([beers]) => {
      res.json(beers[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

router.get("/", welcome);
router.get("/beers", getBeers);
router.get("/beers/:id", getBeersById);

module.exports = router;
