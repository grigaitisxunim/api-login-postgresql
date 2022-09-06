const express = require("express");
const routes = express.Router();
const usuario = require("./controllers/usuarios.controller");

routes.get("/api/usuarios.details/:_id", usuario.details);
routes.get("/", usuario.index);
routes.post("/api/usuarios", usuario.create);
routes.get("/api/usuarios", usuario.index);
routes.delete("/api/usuarios/:_id", usuario.delete);
routes.put("/api/usuarios", usuario.update);
module.exports = routes;
