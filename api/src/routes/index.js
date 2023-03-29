const { Router } = require("express");
const videogamesRouter = require("./videogames.js");
const genresRouter = require("./genres");

const mainRouter = Router();

mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/genres", genresRouter);

module.exports = mainRouter;
