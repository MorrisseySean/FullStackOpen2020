import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import NewPersonForm from "./components/Form";
import phonebookServices from "./services/Phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setnameFilter] = useState("");

  // Get persons data from database
  const personsHook = () => {
    phonebookServices.getAll().then((initPersons) => setPersons(initPersons));
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

  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}`)) {
      phonebookServices.deletePerson(person.id);
      const filteredList = persons.filter((p) => p.id !== person.id);
      setPersons(filteredList);
    }
  };

  const handleEdit = (person, newEntry) => {
    if (
      window.confirm(
        `${person.name} is already in the phonebook, replace the old number with a new one?`
      )
    ) {
      phonebookServices.update(person.id, newEntry).then((response) => {
        setPersons(persons.map((p) => (p.id !== response.id ? p : response)));
      });
    }
  };

  const addName = (event) => {
    event.preventDefault();
    const newEntry = { name: newName, number: newNumber };
    const match = persons.find((person) => person.name === newName);
    if (match) {
      handleEdit(match, newEntry);
    } else {
      phonebookServices.create(newEntry).then((newPerson) => {
        const addPerson = [...persons, newPerson];
        setPersons(addPerson);
      });
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
      <Persons
        persons={persons}
        filter={nameFilter}
        deleteHandler={handleDelete}
      />
    </div>
  );
};

export default App;
