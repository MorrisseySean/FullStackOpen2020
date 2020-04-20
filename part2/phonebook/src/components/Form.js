import React from "react";

const NewPersonForm = (props) => {
  return (
    <form onSubmit={props.formHandler}>
      name: <input value={props.nameValue} onChange={props.nameHandler} />
      number: <input value={props.numValue} onChange={props.numHandler} />
      <button type="submit">add</button>
    </form>
  );
};

export default NewPersonForm;
