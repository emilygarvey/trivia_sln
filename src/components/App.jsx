import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
// import components here

function App() {
  const [answerState, setAnswerState] = useState("unanswered");
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  //function handleClick() {}

  return (
    <div className="app">
      <h1>Trivia!</h1>
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

      <NextQuestion
        goToNextQuestion={() => {
          setCurrentQuestionNum(currentQuestionNum + 1);
          setAnswerState("unanswered");
        }}
      />
    </div>
  );
}

function Question(props) {
  return (
    <div>
      {props.question}
      <Answer answer={props.choices[0]} />
      <Answer answer={props.choices[1]} />
      <Answer answer={props.choices[2]} />
      <Answer answer={props.choices[3]} />
    </div>
  );
}

function Answer(props) {
  return <div>{props.answer}</div>;
}

function NextQuestion(props) {
  return <button onClick={props.goToNextQuestion}>Next Question</button>;
}

export default App;
