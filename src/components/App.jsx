import React, { useState } from "react";
import "../css/App.css";
import "../css/fonts.css";
import data from "../sample_data.json";

function App() {
  const [answerState, setAnswerState] = useState("unanswered");
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  function questionAnswered() {
    if (answerState === "unanswered") {
      return <p className="prompt">Click an answer above</p>;
    }
    if (
      answerState ===
      data[currentQuestionNum].question.choices[
        data[currentQuestionNum].question.correct_choice_index
      ]
    ) {
      return (
        <p className="prompt">You chose {answerState}. That is correct!</p>
      );
    } else {
      return (
        <p className="prompt">You chose {answerState}. That is incorrect.</p>
      );
    }
  }

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
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
      {questionAnswered()}
      {currentQuestionNum < data.length - 1 && answerState !== "unanswered" ? (
        <NextQuestion
          goToNextQuestion={() => {
            setCurrentQuestionNum(currentQuestionNum + 1);
            setAnswerState("unanswered");
          }}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}

function Question(props) {
  return (
    <div>
      <div className="question">{props.question}</div>
      <div className="answers">
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
