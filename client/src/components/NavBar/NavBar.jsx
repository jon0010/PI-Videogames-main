import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.menu}>
        <div className={styles.logo}>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "aliceblue" }}
          >
            {" "}
            VIDEOGAMES
            <img
              className={styles.img}
              src="https://1.bp.blogspot.com/-nZWHxn-N72Q/XIafjdKz3HI/AAAAAAAAImo/dldCM94NHqw6r50tC9v-UnTt9xHocb7eACK4BGAYYCw/s1600/icon%2Bgame%2Bvideo.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <button className={styles.button}>
          <NavLink to="/home" className={styles.link}>
            <div className={styles.div}> HOME</div>
          </NavLink>
        </button>
        <button className={styles.button}>
          <NavLink to="/create" className={styles.link}>
            <div className={styles.div}> CREATE VIDEOGAME </div>
          </NavLink>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
