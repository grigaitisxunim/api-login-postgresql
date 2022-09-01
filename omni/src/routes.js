const express = require("express");
const routes = express.Router();
const usuario = require("./controllers/usuarios.controller");

routes.get("/", usuario.index);
routes.post("api/usuarios", usuario.create);
module.exports = routes;
