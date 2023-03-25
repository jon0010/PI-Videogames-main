const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();

const getAllVideogames = async () => {
  try {
    let links = [];
    let apis = [];
    for (let i = 1; i <= 5; i++) {
      links.push(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${i}`
      );
    }

    apis = links.map((link) => {
      return axios
        .get(link)
        .then((data) => data.data)
        .then((data) => data.results)
        .then((data) => {
          return data.map((game) => ({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            genres: game.genres.map((genre) => genre.name),
            platforms: game.platforms.map((element) => element.platform.name),
            rating: game.rating,
          }));
        });
    });
    let allGames = await Promise.all(apis);
    return allGames.flat();
    // .then((data) => [...data, ...databaseVideoGames])
    // .catch((error) => new Error(error));
  } catch (error) {
    return [];
  }
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
