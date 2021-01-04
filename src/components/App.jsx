import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [answerState, setAnswerState] = useState("unanswered");
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  function questionAnswered() {
    if (answerState === "unanswered") {
      return <p>Choose an answer</p>;
    }
    if (
      answerState ===
      data[currentQuestionNum].question.choices[
        data[currentQuestionNum].question.correct_choice_index
      ]
    ) {
      return <p>You chose {answerState}. That is correct!</p>;
    } else {
      return <p>You chose {answerState}. That is incorrect.</p>;
    }
  }

  return (
    <div className="app">
      <h1>Trivia!</h1>
      {/* <p>Click the correct answer choice below...</p> */}
      <Question
        question={data[currentQuestionNum].question.text}
        choices={data[currentQuestionNum].question.choices}
        setAnswerState={setAnswerState}
      />

      {/* <button
        onClick={() =>
          setAnswerState(
            data[currentQuestionNum].question.choices[
              data[currentQuestionNum].question.correct_choice_index
            ]
          )
        }
      >
        Click for the correct answer
      </button> */}
      <p>{questionAnswered()}</p>
      {currentQuestionNum < data.length - 1 ? (
        <NextQuestion
          goToNextQuestion={() => {
            setCurrentQuestionNum(currentQuestionNum + 1);
            setAnswerState("unanswered");
          }}
        />
      ) : (
        <p>Quiz over!</p>
      )}
    </div>
  );
}

function Question(props) {
  return (
    <div>
      {props.question}
      {props.choices.map((choice) => {
        return (
          <Answer
            answer={choice}
            onClick={() => props.setAnswerState(choice)}
          />
        );
      })}
      {/* <Answer answer={props.choices[0]} />
      <Answer answer={props.choices[1]} />
      <Answer answer={props.choices[2]} />
      <Answer answer={props.choices[3]} /> */}
    </div>
  );
}

function Answer(props) {
  return <div onClick={props.onClick}>{props.answer}</div>;
}

function NextQuestion(props) {
  return <button onClick={props.goToNextQuestion}>Next Question</button>;
}

export default App;
