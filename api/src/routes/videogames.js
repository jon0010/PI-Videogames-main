const { Router } = require("express");
const {
  videogamesHandler,
  videogamesHandlerById,
  videogamesPosts,
} = require("../handlers/videogameHandler");

const videogamesRouter = Router();

videogamesRouter.get("/", videogamesHandler);
videogamesRouter.get("/:id", videogamesHandlerById);
videogamesRouter.post("/", videogamesPosts);

module.exports = videogamesRouter;
