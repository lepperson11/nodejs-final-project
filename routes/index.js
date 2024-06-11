const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.firstFunction);

module.exports = routes;
