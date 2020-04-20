import React, { useState } from "react";
import Persons from "./Persons";
import Filter from "./Filter";
import NewPersonForm from "./Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setnameFilter] = useState("");

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleFilter = (event) => {
    setnameFilter(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const newEntry = { name: newName, number: newNumber };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const addPerson = [...persons, newEntry];
      setPersons(addPerson);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} handler={handleFilter} />
      <h2>Add New</h2>
      <NewPersonForm
        formHandler={addName}
        nameHandler={handleNameChange}
        numHandler={handleNumChange}
        nameValue={newName}
        numValue={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={nameFilter} />
    </div>
  );
};

export default App;
