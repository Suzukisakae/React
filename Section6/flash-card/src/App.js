import React, { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <>
      <h1>Flashcards</h1>
      <div className="flashcards">
        {questions.map((question) => (
          <FlashCard key={question.id} question={question} />
        ))}
      </div>
      <h1>Date</h1>
    </>
  );
}

function FlashCard({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);
  function handleClick() {
    setShowAnswer(!showAnswer);
  }
  return (
    <div onClick={handleClick} className={showAnswer ? "selected" : ""}>
      <h3>{showAnswer ? question.answer : question.question}</h3>
    </div>
  );
}
