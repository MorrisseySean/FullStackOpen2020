import React from "react";

const Persons = (props) => {
  const filter = props.filter;
  const filteredList = props.persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return filteredList.map((person) => (
    <p key={person.id}>
      {person.name}: {person.number}{" "}
      <button onClick={() => props.deleteHandler(person)}>Delete</button>
    </p>
  ));
};

export default Persons;
