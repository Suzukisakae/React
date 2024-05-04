function StartScreen({ numberOfQuestions }) {
  return (
    <div>
      <h2>Welcome to The React Quizz</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
