import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return [
    <Part part={props.parts[0]} exercise={props.exercises[0]} />,
    <Part part={props.parts[1]} exercise={props.exercises[1]} />,
    <Part part={props.parts[2]} exercise={props.exercises[2]} />,
  ];
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.exercises}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises[0] + exercises[1] + exercises[2]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
