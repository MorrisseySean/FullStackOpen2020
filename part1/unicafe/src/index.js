import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const good = props.stats[0];
  const neutral = props.stats[1];
  const bad = props.stats[2];
  const total = good + neutral + bad;

  return [
    <p>Good: {good}</p>,
    <p>Neutral: {neutral}</p>,
    <p>Bad: {bad}</p>,
    <p>Total: {good + neutral + bad}</p>,
    <p>Average: {(good - bad) / total}</p>,
    <p>Positive: {(good / total) * 100}%</p>,
  ];
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Header text="Statistics" />
      <Statistics stats={[good, neutral, bad]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
