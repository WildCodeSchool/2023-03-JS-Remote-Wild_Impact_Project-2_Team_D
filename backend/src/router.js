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
// const itemControllers = require("./controllers/itemControllers");
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
