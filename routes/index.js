const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Repositorio: https://github.com/fbertorel/TPArqWeb");
})

module.exports = router;
