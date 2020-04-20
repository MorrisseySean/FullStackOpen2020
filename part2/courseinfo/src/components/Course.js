import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={props.parts} />
    </div>
  );
};

const Total = (props) => {
  const num = props.parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return (
    <div>
      <p>
        <b>Total number of exercises: {num}</b>
      </p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
    </>
  );
};

export default Course;
