import React, { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import NewPersonForm from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setnameFilter] = useState("");

  // Get persons data from database
  const personsHook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(personsHook, []);

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