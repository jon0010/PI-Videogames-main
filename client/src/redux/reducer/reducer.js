import {
  GET_ALL_VIDEOGAMES,
  FIND_VIDEOGAME,
  VIDEOGAME_DETAIL,
  GET_GENRES,
  FILTER_BY_GENRES,
  FILTER_BY_ORIGIN,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
} from "../actions/actions-type.js";

const initialState = {
  videogames: [],
  videogamesAux: [],
  detail: {},
  genres: [],
  platforms: [],
  errorFilter: false,
};

const reducer = (state = initialState, action) => {
  let videogamesAux = state.videogamesAux;
  let videogames = state.videogames;
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        videogamesAux: action.payload,
        orderedAux: action.payload,
      };
    case FIND_VIDEOGAME:
      return {
        ...state,
        videogamesAux: action.payload,
      };
    case VIDEOGAME_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case FILTER_BY_GENRES:
      let filterGenresVideogames = videogames;
      if (action.payload.length > 0) {
        filterGenresVideogames = videogamesAux.filter((videogame) => {
          const noIncludesGenre = [];
          action.payload.forEach((genre) => {
            if (!videogame.genres.includes(genre)) {
              noIncludesGenre.push(genre);
            }
          });
          return !noIncludesGenre.length;
        });
      }
      return {
        ...state,
        videogamesAux: filterGenresVideogames,
      };
    case FILTER_BY_ORIGIN:
      const filterVideogame = videogamesAux.filter((game) => {
        if (action.payload === "db") {
          return typeof game.id === "string";
        }
        if (action.payload === "api") {
          return typeof game.id === "number";
        }
        return true;
      });
      return {
        ...state,
        videogamesAux: filterVideogame,
      };
    case ORDER_BY_NAME:
      const orderNameVideogames = videogamesAux.sort((gameA, gameB) => {
        if (action.payload === "asc") {
          return gameA.name.toLowerCase() < gameB.name.toLowerCase() ? -1 : 0;
        }
        return gameB.name.toLowerCase() < gameA.name.toLowerCase() ? -1 : 0;
      });
      return {
        ...state,
        videogamesAux: orderNameVideogames,
      };
    case ORDER_BY_RATING:
      const orderRatingVideogames = videogamesAux.sort((gameA, gameB) => {
        if (action.payload === "up") {
          return gameB.rating - gameA.rating;
        }
        return gameA.rating - gameB.rating;
      });
      return {
        ...state,
        videogamesAux: orderRatingVideogames,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
