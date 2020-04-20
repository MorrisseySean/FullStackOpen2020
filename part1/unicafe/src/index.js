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
  const average = (good - bad) / total;
  const positive = (good / total) * 100 + "%";

  if (total <= 0) {
    return <h2>No feedback given</h2>;
  }
  return [
    <Statistic text="Good" value={good} />,
    <Statistic text="Neutral" value={neutral} />,
    <Statistic text="Bad" value={bad} />,
    <Statistic text="Total" value={total} />,
    <Statistic text="Average" value={average} />,
    <Statistic text="Positive" value={positive} />,
  ];
};

const Statistic = (props) => {
  return (
    <p>
      {props.text}: {props.value}
    </p>
  );
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
