const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const getAllVideogames = async () => {
  const numberPages = [1, 2, 3, 4, 5];
  const links = numberPages.map((page) => {
    return `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}`;
  });
  const apiVideogames = await Promise.all(
    links.map(async (link) => {
      const videogamesPage = await axios.get(link);
      const videogames = videogamesPage.data.results;
      const formatVideogames = videogames.map((game) => {
        return {
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          genres: game.genres.map((genre) => genre.name),
          platforms: game.platforms.map((element) => element.platform.name),
          rating: game.rating,
        };
      });
      return formatVideogames;
    })
  );
  const clearListVideogamesApi = apiVideogames.reduce((a, b) => {
    return a.concat(b);
  });
  let databaseVideoGames = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
    },
  });
  const clearListVideogamesDB = databaseVideoGames.map((dbVideogame) => {
    const dbGame = {
      id: dbVideogame.dataValues.id,
      name: dbVideogame.dataValues.name,
      background_image: dbVideogame.dataValues.background_image,
      genres: dbVideogame.dataValues.Genres.map(
        (genre) => genre.dataValues.name
      ),
      platforms: dbVideogame.dataValues.platforms,
      rating: dbVideogame.dataValues.rating,
    };
    return dbGame;
  });
  console.log(clearListVideogamesDB);
  return clearListVideogamesApi.concat(clearListVideogamesDB);
};

const getVideogameById = async (id) => {
  try {
    const api = `https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`;
    const response = await axios.get(api);
    const game = response.data;
    const gameDetail = {
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      description: game.description,
      released: game.released,
      rating: game.rating,
      platforms: game.platforms.map((element) => element.platform.name),
      genres: game.genres.map((genre) => genre.name),
    };
    return gameDetail;
  } catch (error) {
    return new Error(error);
  }
};

const getPlatforms = async () => {
  try {
    const videogames = await getAllVideogames();
    const platforms = videogames.map((game) => game.platforms);
    const platforms_1 = platforms.flat();
    const platforms_2 = new Set(platforms_1);
    return Array.from(platforms_2);
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  getPlatforms,
};
