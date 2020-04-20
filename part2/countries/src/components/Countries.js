import React from "react";

const Countries = ({ countries, filter, setFilter }) => {
  const filteredList = countries.filter((country) =>
    country.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  if (filteredList.length > 10) {
    return <p>Too many matches. Please specify further.</p>;
  }
  if (filteredList.length > 1) {
    return <CountryList countries={filteredList} setFilter={setFilter} />;
  }
  if (filteredList.length > 0) {
    return <FullCountry country={filteredList[0]} />;
  }
  return <h2>No countries match that search term.</h2>;
};

const FullCountry = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <Languages languages={country.languages} />
      <img src={country.flag} alt="Flag" width="100px" />
    </div>
  );
};

const Languages = ({ languages }) => {
  return (
    <ul>
      {languages.map((lang) => (
        <li key={lang.name}>{lang.name}</li>
      ))}
    </ul>
  );
};

const CountryList = ({ countries, setFilter }) => {
  return (
    <div>
      {countries.map((country) => (
        <p key={country.alpha3Code}>
          {country.name}
          <button onClick={() => setFilter(country.name)}>Show</button>
        </p>
      ))}
    </div>
  );
};

export default Countries;
