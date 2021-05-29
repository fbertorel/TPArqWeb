const express = require("express");
const router = express.Router();

const productsService = require("../services/products");

router.get("/", (req, res) => {
  const products = productsService.getAll();
  res.send(products);
});

router.get("/:id", (req, res) => {
  try {
    const product = productsService.get(req.params.id);
    res.send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/:id", (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Parameters not defined");
    return;
  }
  try {
    productsService.delete(req.params.id);
    res.send("Deleted product: " + req.params.id);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("", (req, res) => {           //me esta dejando enviar en el body cualquier cosa o paramentros faltantes. Necesito validar el body que se recibe
  if (!req.body) {
    res.status(400).send("Parameters not defined");
    return;
  }

  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  };
  try {
    const createdProduct = productsService.create(product);    //creo el producto, que en ./services/products.js va a guardarlo en el JSON de saves
    res.send(createdProduct);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;