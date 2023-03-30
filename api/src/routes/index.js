const { Router } = require("express");
const videogamesRouter = require("./videogames.js");
const genresRouter = require("./genres");
const platformsRouter = require("./platforms");

const mainRouter = Router();

mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/genres", genresRouter);
mainRouter.use("/platforms", platformsRouter);

module.exports = mainRouter;
