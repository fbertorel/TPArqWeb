const express = require("express");
const { validateParams } = require('../validator/validator');
const router = express.Router();

const salesService = require("../services/sales");

router.get("/", (req, res) => {
  let sales = [];
  sales = salesService.getAll();
  res.send(sales);
});

router.get("/:id", (req, res) => {
  try {
    const sale = salesService.get(req.params.id);
    res.send(sale)
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/user/:userId", (req, res) => {
  try {
    const sales = salesService.getAllByUser(req.params.userId);
    res.send(sales);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/product/:productId", (req, res) => {
  try {
    const sales = salesService.getAllByProduct(req.params.productId);
    res.send(sales);
  } catch (e) {
    res.status(400).send(e.message);
  }
});


router.post("", (req, res) => {
  if (!req.body || !validateParams(req.body, salesService.fields)) {
    res.status(400).send("Parameters not defined");
    return;
  }
  const sale = {
    products: req.body.products,
    userId: req.body.userId,
    date: req.body.date,
    totalPrice: req.body.totalPrice,
  };
  try {
    const created = salesService.create(sale);
    res.send(created)
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.put("/:id", (req, res) => {
  if (!req.params.id || !req.body || !validateParams(req.body, salesService.fields)) {
    res.status(400).send("Parameters not defined");
    return;
  }
  const sale = {
    id: req.params.id,
    products: req.body.products,
    userId: req.body.userId,
    date: req.body.date,
    totalPrice: req.body.totalPrice,
  };
  try {
    const updated = salesService.update(sale);
    res.send(updated);
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
    salesService.delete(req.params.id);
    res.send("Deleted " + req.params.id);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;