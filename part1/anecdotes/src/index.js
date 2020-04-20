import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = (props) => {
  return (
    <p>
      {props.anecdote} <br /> Votes: {props.votes}
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length));

  const randomAnecdote = () => {
    const min = 0;
    const max = props.anecdotes.length;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  const handleRandomClick = () => {
    setSelected(randomAnecdote());
  };

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleRandomClick} text="Next anecdote" />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
