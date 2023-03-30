import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videogameDetail } from "../../redux/actions/actions.js";
import NavBar from "../NavBar/NavBar";
import styles from "./VideogameDetail.module.css";

const VideogameDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(videogameDetail(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        {Object.keys(detail).length ? (
          <div className={styles.card}>
            <div className={styles.game}>
              <div className={styles.detail}>
                <span className={styles.name}>{detail.name.toUpperCase()}</span>
                <div className={styles.items}>
                  <div className={styles.list}>
                    <span>Genres: </span>
                    <br />
                    <div>
                      {detail.genres.map((genre) => (
                        <div key={genre.name ?? genre}>
                          · {genre.name ?? genre}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.list}>
                    <span>Platforms: </span>
                    <br />
                    <div className={styles.genres_platforms}>
                      {detail.platforms.map((platform) => (
                        <div key={platform}>· {platform} </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  Rating: {detail.rating}
                  <br />
                  Released: {detail.released}
                </div>
                <div className={styles.description}>
                  <span>Description: </span>
                  <br />
                  <br />
                  <span>
                    {decodeURI(detail.description)
                      .split("<p>")
                      .join(" ")
                      .split("</p>")
                      .join("")
                      .split("<br />")
                      .join("")}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={detail.background_image}
                  alt="error"
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.all}>
            <div className={styles.loader}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
              <div className={styles.bar4}></div>
              <div className={styles.bar5}></div>
              <div className={styles.bar6}></div>
              <div className={styles.bar7}></div>
              <div className={styles.bar8}></div>
              <div className={styles.bar9}></div>
              <div className={styles.bar10}></div>
              <div className={styles.bar11}></div>
              <div className={styles.bar12}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideogameDetail;
