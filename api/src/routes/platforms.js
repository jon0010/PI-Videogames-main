const { Router } = require("express");

const { getPlatformsHandler } = require("../handlers/videogameHandler");

platformsRouter = Router();

platformsRouter.get("/", getPlatformsHandler);

module.exports = platformsRouter;
