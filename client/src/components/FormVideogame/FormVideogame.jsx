import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGenres, postVideogame } from "../../redux/actions/actions";
import NavBar from "../NavBar/NavBar";
import styles from "./FormVideogame.module.css";

const FormVideogame = () => {
  const history = useNavigate();

  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const [formGenres, setGenres] = useState([]);
  const [form, setForm] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState({});

  const validationName = (e) => {
    if (e.target.value.length > 250) {
      error.name = "The name characters are way to many";
    } else {
      error.name = null;
    }
  };

  const validationRating = (e) => {
    if (!/[1-5]/.test(e.target.value)) {
      error.rating = "Rate the game with numbers between 1 and 5.";
    } else {
      error.rating = null;
    }
  };

  const validationGenres = () => {
    if (formGenres.length === 1) {
      error.genres = "The game must have at least one genre.";
    }
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postVideogame(form));
    return history(`/home`);
  };

  const handleName = (e) => {
    e.preventDefault();
    validationName(e);
    setForm({
      ...form,
      name: e.target.value,
    });
  };

  const handlePlatform = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      platform: e.target.value,
    });
  };

  const handleReleased = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      released: e.target.value,
    });
  };

  const handleBackgroundImage = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      image: e.target.value,
    });
  };

  const handleRating = (e) => {
    e.preventDefault();
    validationRating(e);
    setForm({
      ...form,
      rating: e.target.value,
    });
    console.log(form);
  };

  const handleGenres = (e) => {
    e.preventDefault();
    error.genres = null;
    if (e.target.value !== "select_genres") {
      formGenres.push(e.target.value);
      setForm({
        ...form,
        genres: formGenres,
      });
    }
  };

  const handleDescription = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      description: e.target.value,
    });
  };

  const handleGenresX = (e) => {
    e.preventDefault();
    setGenres(formGenres.filter((genre) => genre !== e.target.value));
    validationGenres();
  };

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <form onSubmit={(e) => handleOnSubmit(e)} className={styles.form}>
          <label htmlFor="name">
            Name <span className={styles.asterisco}>*</span>
          </label>
          {error.name && <span className={styles.asterisco}>{error.name}</span>}
          <input type="text" id="name" onChange={(e) => handleName(e)} />

          <label htmlFor="platform">
            Platform <span className={styles.asterisco}>*</span>
          </label>
          {error.platform && (
            <span className={styles.asterisco}>{error.platform}</span>
          )}
          <input
            type="text"
            id="platform"
            onChange={(e) => handlePlatform(e)}
          />
          <label htmlFor="released">
            Released <span className={styles.asterisco}>*</span>
          </label>
          {error.released && (
            <span className={styles.asterisco}>{error.released}</span>
          )}
          <input
            type="text"
            id="released"
            onChange={(e) => handleReleased(e)}
          />
          <label htmlFor="background_image">Background Image</label>
          <input
            type="text"
            id="image"
            onChange={(e) => handleBackgroundImage(e)}
          />
          <label htmlFor="rating">Rating:</label>
          {error.rating && (
            <span className={styles.asterisco}>{error.rating}</span>
          )}
          <input
            type="number"
            id="rating"
            onChange={(e) => handleRating(e)}
            min="1"
            max="5"
            placeholder="1-5"
          />
          <label htmlFor="genres">
            Genres<span className={styles.asterisco}>*</span>
          </label>
          {error.genres && (
            <span className={styles.asterisco}> {error.genres} </span>
          )}
          <select
            className={styles.select}
            id="genres"
            onChange={(e) => handleGenres(e)}
          >
            <option value="select_genres">Select genres...</option>
            {genres.length > 0 &&
              genres.map((genre) => (
                <option key={genre.name} value={genre.name}>
                  {genre.name}
                </option>
              ))}
          </select>
          {formGenres.length > 0 &&
            formGenres.map((genre) => (
              <span key={genre}>
                · {genre}
                <button value={genre} onClick={(e) => handleGenresX(e)}>
                  x
                </button>
              </span>
            ))}
          <label htmlFor="description">
            Description<span className={styles.asterisco}>*</span>
          </label>
          {error.description && (
            <span className={styles.asterisco}>{error.description}</span>
          )}
          <textarea
            className={styles.textDescription}
            id="description"
            placeholder="Describe the videogame..."
            onChange={(e) => handleDescription(e)}
            rows="10"
            cols="30"
          ></textarea>
          <span className={styles.asterisco}>{error.error}</span>
          {!error.name &&
            !error.rating &&
            !error.description &&
            !error.platforms &&
            !error.genres && (
              <input
                className={styles.enviar}
                type="submit"
                style={{ cursor: "pointer" }}
              />
            )}
        </form>
      </div>
    </>
  );
};

export default FormVideogame;
