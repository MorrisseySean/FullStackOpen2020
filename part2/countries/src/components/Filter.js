import React from "react";

const Filter = (props) => {
  return (
    <div>
      filter countries: <input value={props.value} onChange={props.handler} />
    </div>
  );
};

export default Filter;
