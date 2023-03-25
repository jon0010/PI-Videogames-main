import React from "react";
import styles from "./Landing.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions/actions";

const Landing = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleOnStart = (e) => {
    e.preventDefault();
    dispatch(getAllVideogames());
    history("/home");
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.paragraph}>
          Welcome to Press Start! my video game page for the Individual Project
          stage! I hope you find everything you are looking for. At this
          website, you will find a lot of information about the world of
          Gamming. You will also be able to create your own videogames and share
          them with the with the community.
          <br /> Thank you for visiting us, we hope you enjoy browsing our
          website!
          <br /> Lets go, just press start to initiate the game.
          <br /> Made by Jon Pereyra with ❤️
        </p>
      </div>

      <Link to="/home">
        <input
          type="button"
          className={styles.button}
          onClick={(e) => handleOnStart(e)}
        />
      </Link>
    </div>
  );
};

export default Landing;
