import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByOrigin,
  getAllVideogames,
} from "../../redux/actions/actions.js";

const FilterOrigin = ({ setPage }) => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  const handleOnSelect = (e) => {
    e.preventDefault();
    e.target.value === "select"
      ? dispatch(getAllVideogames())
      : dispatch(filterByOrigin(e.target.value));
    setPage(1);
    console.log(videogames);
  };

  return (
    <div>
      <label htmlFor="origin">Origin: </label>
      <br />
      <select
        id="origin"
        onChange={(e) => handleOnSelect(e)}
        style={{ width: "100%" }}
      >
        <option value="select">All</option>
        <option value="api">Api</option>
        <option value="db">Database</option>
      </select>
    </div>
  );
};

export default FilterOrigin;
