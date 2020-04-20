import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  // Get persons data from database
  const webHook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(webHook, []);

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter value={filter} handler={filterHandler} />
      <Countries countries={countries} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
