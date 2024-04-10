import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <>
      <div>
        <h1>My 3 Steps</h1>
        <Steps />
      </div>
      <div>
        <h1>Challenge</h1>
        <Counter />
      </div>
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              textColor="#fff"
              backgroundColor="#1971c2"
              onClick={handlePrevious}
            >
              Previous <span>👈</span>
            </Button>
            <Button
              textColor="#fff"
              backgroundColor="#1971c2"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("2021-09-01");
  date.setDate(date.getDate() + count);

  function handleIncrement() {
    setCount((c) => c + step);
  }

  function handleDecrement() {
    setCount((c) => c - step);
  }

  function handleIncrementStep() {
    setStep((s) => s + 1);
  }

  function handleDecrementStep() {
    setStep((s) => s - 1);
  }

  return (
    <>
      <div className="counter">
        <button className="btnCounter" onClick={handleIncrementStep}>
          +
        </button>
        <p className="message">Step: {step}</p>
        <button className="btnCounter" onClick={handleDecrementStep}>
          -
        </button>
      </div>
      <div className="counter">
        <button className="btnCounter" onClick={handleDecrement}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="btnCounter" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="steps">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}

export default App;
