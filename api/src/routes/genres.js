const { Router } = require("express");
const genresHandler = require("../handlers/genresHandler");

const genresRouter = Router();

genresRouter.get("/", genresHandler);

module.exports = genresRouter;
