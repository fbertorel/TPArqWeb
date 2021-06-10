const express = require("express");
const router = express.Router();
const { validateParams } = require('../validator/validator');
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

router.post("", (req, res) => {             //mismo problema que products. Permite generar usuario sin verificar los parametros. Y carga usuario sin datos.
  if (!req.body) {
    res.status(400).send("Parameters not defined");
    return;
  }
  
  const user = {
    mail: req.body.mail,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    document: req.body.document,
  };
  try {
    const createdUser = usersService.create(user);
    res.send(createdUser);
  } catch(e) {
    res.status(400).send(e.message);
  }
});

router.put("/:id", (req, res) => {
  if (!req.params.id || !req.body || !validateParams(req.body, usersService.fields)) {
    res.status(400).send("Parameters not defined");
    return;
  }
  const user = {
    id: req.params.id,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    document: req.body.document,
    role: req.body.role,
  };
  try {
    const updatedUser = usersService.update(user);
    res.send(updatedUser);
  } catch(e) {
    res.status(400).send(e.message);
  }
});


module.exports = router;