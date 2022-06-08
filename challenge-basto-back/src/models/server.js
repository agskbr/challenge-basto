require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dbConnection = require("../database/configDB");

function Server() {
  this.app = express();
  this.port = process.env.PORT;
  this.paths = {
    animals: "/api/animals",
  };

  //Config db
  this.connectToDB();

  //config middlewares
  this.configMiddlewares();

  //config routes
  this.configRoutes();
}

Server.prototype.connectToDB = async function () {
  await dbConnection();
};

Server.prototype.configRoutes = function () {
  this.app.use(this.paths.animals, require("../routes/animals"));
};

Server.prototype.configMiddlewares = function () {
  this.app.use(cors());
  this.app.use(express.json());
  this.app.use(morgan("dev"));
};

Server.prototype.listen = function () {
  this.app.listen(this.port, () => {
    console.log("Server running on port", this.port);
  });
};

module.exports = Server;
