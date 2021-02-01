import React, { useState } from "react";
import "../css/App.css";
import "../css/fonts.css";
import data from "../sample_data.json";

function App() {
  let currentQuestionNum = 0;

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question question={data[currentQuestionNum].question.text} />

      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return (
    <div>
      <div className="question">{props.question}</div>
    </div>
  );
}

function NextQuestion() {
  return <button>Next Question</button>;
}

export default App;
