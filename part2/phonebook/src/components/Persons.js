import React from "react";

const Persons = (props) => {
  const filter = props.filter;
  const filteredList = props.persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  return filteredList.map((person) => (
    <p key={person.name}>
      {person.name}: {person.number}
    </p>
  ));
};

export default Persons;
