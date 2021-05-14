const express = require("express");
const router = express.Router();

const usersService = require("../services/users");

router.get("/", (req, res) => {
  const users = usersService.getAll();
  res.send(users);
});

router.get("/:id", (req, res) => {
  try {
    const user = usersService.get(req.params.id);
    res.send(user);
  } catch(e) {
    console.log("Probando users.find error");
    res.status(400).send(e.message);
  }
});

router.delete("/:id", (req, res) => {
  if (!req.params.id) {
    res.status(400).send("Parameters not defined");
    return;
  }
  try {
    usersService.delete(req.params.id);
    res.send("Deleted user: " + req.params.id);
  } catch(e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;