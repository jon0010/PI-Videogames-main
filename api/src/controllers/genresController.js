const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
require("dotenv").config();

const getApiGenres = () => {
  return axios
    .get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
    .then((data) => data.data.results.map((genre) => genre.name))
    .catch((error) => new Error(error));
};

module.exports = {
  getApiGenres,
};
