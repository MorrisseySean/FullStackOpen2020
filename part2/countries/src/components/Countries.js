import React from "react";

const Countries = ({ countries, filter }) => {
  const filteredList = countries.filter((country) =>
    country.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  if (filteredList.length > 10) {
    return <p>Too many matches. Please specify further.</p>;
  }
  if (filteredList.length > 1) {
    return filteredList.map((country) => <p>{country.name}</p>);
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
      <img src={country.flag} width="100px" alt="Flag" />
    </div>
  );
};

const Languages = ({ languages }) => {
  return (
    <ul>
      {languages.map((lang) => (
        <li>{lang.name}</li>
      ))}
    </ul>
  );
};

export default Countries;
