const myController = require("../controllers");
const routes = require("express").Router();

routes.use("/employees", require("./employees"));

module.exports = routes;
