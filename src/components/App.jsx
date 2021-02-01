import React, { useState } from "react";
import "../css/App.css";
import "../css/fonts.css";
import data from "../sample_data.json";

function App() {
  let currentQuestionNum = 0;
  const [answerState, setAnswerState] = useState("unanswered");

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      {/* <p>Click the correct answer choice below...</p> */}
      <Question
        question={data[currentQuestionNum].question.text}
        choices={data[currentQuestionNum].question.choices}
      />

      <button
        onClick={() =>
          setAnswerState(
            data[currentQuestionNum].question.choices[
              data[currentQuestionNum].question.correct_choice_index
            ]
          )
        }
      >
        Click for the correct answer
      </button>
      <p>The correct answer is {answerState}</p>
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return (
    <div>
      <div className="question">{props.question}</div>
      <div className="answers">
        {props.choices.map((choice) => {
          return <Answer answer={choice} />;
        })}
        {/* <Answer answer={props.choices[0]} />
      <Answer answer={props.choices[1]} />
      <Answer answer={props.choices[2]} />
      <Answer answer={props.choices[3]} /> */}
      </div>
    </div>
  );
}

function Answer(props) {
  return <div onClick={props.onClick}>{props.answer}</div>;
}

function NextQuestion() {
  return <button>Next Question</button>;
}

export default App;
