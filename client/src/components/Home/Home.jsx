import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import {
  findVideogame,
  getAllVideogames,
  orderByName,
  orderByRating,
} from "../../redux/actions/actions.js";
import FilterGenres from "../FilterGenres/FilterGenres";
import FilterOrigin from "../FilterOrigin/FilterOrigin";
import CardVideogame from "../CardVideogame/CardVideogame";
import styles from "./Home.module.css";
//---------------------------------------------------------------------
const Home = () => {
  const videogamesAux = useSelector((state) => state.videogamesAux);
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [orderName, setOrderName] = useState("");
  const [orderRating, setOrderRating] = useState("");
  const [page, setPage] = useState(1);
  const videogamesPerPage = 15;
  const lastIndex = page * videogamesPerPage;
  const firstIndex = lastIndex - videogamesPerPage;
  const pageVideogames = videogamesAux.slice(firstIndex, lastIndex);
  const pagesNumber = Math.ceil(videogamesAux.length / 15);
  const pages = [];
  for (let i = 1; i <= pagesNumber; i++) {
    pages.push([i]);
  }

  useEffect(() => {
    if (videogames.length === 0) {
      dispatch(getAllVideogames());
    }
  }, [dispatch, videogames]);
  //-----------------------------------------------------------------
  const handlePageChange = (newPage, paging) => {
    if (newPage) {
      setPage(newPage[0]);
    } else if (page !== pagesNumber && paging === "+") {
      setPage(page + 1);
    } else if (page !== 1 && paging === "-") {
      setPage(page - 1);
    }
  };

  const handleOrderName = (e) => {
    setOrderName(e.target.id);
    dispatch(orderByName(e.target.id));
  };

  const handleOrderRating = (e) => {
    setOrderRating(e.target.id);
    dispatch(orderByRating(e.target.id));
  };

  const handleOnSearch = (e) => {
    dispatch(findVideogame(e.target.value));
    setPage(1);
  };
  //-----------------------------------------------------------------
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.filters}>
        <nav className={styles.lateral}>
          <label htmlFor="search">
            Search Videogame:
            <input
              id="search"
              type="search"
              placeholder="Videogame Name..."
              onChange={(e) => handleOnSearch(e)}
              className={styles.bars}
            />
          </label>
          <div className={styles.filters}>
            <div className={styles.titles}>Filters</div>
            <FilterGenres setPage={setPage} />
            <FilterOrigin setPage={setPage} />
          </div>
          <div className={styles.items}>
            <div className={styles.titles}>Orders</div>
            <span>Name</span>
            <div className={styles.order}>
              <label htmlFor="asc" className={styles.input}>
                <input
                  type="radio"
                  name="orderName"
                  id="asc"
                  checked={orderName === "asc"}
                  onChange={(e) => handleOrderName(e)}
                />
                A - Z
              </label>
              <label htmlFor="des" className={styles.input}>
                <input
                  type="radio"
                  name="orderName"
                  id="des"
                  checked={orderName === "des"}
                  onChange={(e) => handleOrderName(e)}
                />
                Z - A
              </label>
            </div>
            <span>Rating</span>
            <div className={styles.order}>
              <label htmlFor="up">
                <input
                  type="radio"
                  id="up"
                  name="orderRating"
                  checked={orderRating === "up"}
                  onChange={(e) => handleOrderRating(e)}
                />
                Ascending
              </label>
              <label htmlFor="down">
                <input
                  type="radio"
                  id="down"
                  name="orderRating"
                  checked={orderRating === "down"}
                  onChange={(e) => handleOrderRating(e)}
                />
                Descending
              </label>
            </div>
          </div>
        </nav>
        <div className={styles.number}>
          {videogamesAux.length > 0 && (
            <div className={styles.paging}>
              {pages.length > 1 && (
                <button
                  id="-"
                  onClick={(e) => handlePageChange(null, e.target.id)}
                  className={styles.font}
                >
                  PREV
                </button>
              )}
              {pages.map((newPage) => (
                <button
                  key={newPage}
                  onClick={() => handlePageChange(newPage)}
                  className={styles.font}
                >
                  {newPage}
                </button>
              ))}
              {pages.length > 1 && (
                <button
                  id="+"
                  onClick={(e) => handlePageChange(null, e.target.id)}
                  className={styles.font}
                >
                  NEXT
                </button>
              )}
            </div>
          )}
        </div>
        {pageVideogames && (
          <div>
            <div className={styles.pageNumberTop}>page: {page}</div>
            <div className={styles.container}>
              {pageVideogames.map((game) => (
                <CardVideogame
                  id={game.id}
                  key={game.id}
                  name={game.name}
                  background_image={game.background_image}
                  genres={game.genres}
                />
              ))}
            </div>
          </div>
        )}
        {videogames.length === 0 && (
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
        {videogames.length > 0 && pageVideogames.length === 0 && (
          <div className={styles.all}>
            <div className={styles.loader}>
              <p>NO HAY GAMEEE</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
//---------------------------------------------------------------------
export default Home;
