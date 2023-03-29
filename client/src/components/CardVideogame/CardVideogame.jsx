import React from "react";
import styles from "./CardVideogame.module.css";
import { NavLink } from "react-router-dom";

const CardVideogame = (props) => {
  return (
    <>
      <div className={styles.textCard}>
        <NavLink to={`/${props.id}`} className={styles.container}>
          <div className={styles.genres}>
            <div className={styles.name}>
              {props.name.toUpperCase() ||
                props.genre ||
                props.background_image}
            </div>
            <div className={styles.text}>
              <ul>
                {props.genres.map((genre) => (
                  <li key={genre}> {genre}</li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={props.background_image}
            alt="error"
            className={styles.img}
          />
        </NavLink>
      </div>
    </>
  );
};

export default CardVideogame;
