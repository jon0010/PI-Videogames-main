import React from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../redux/actions/actions.js";

const FilterOrigin = ({ setPage }) => {
  const dispatch = useDispatch();

  const handleOnSelect = (e) => {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
    setPage(1);
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
