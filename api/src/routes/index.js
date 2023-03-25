const { Router } = require("express");
const videogamesRouter = require("./videogames.js");
const genresRouter = require("./genres");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/genres", genresRouter);

module.exports = mainRouter;
