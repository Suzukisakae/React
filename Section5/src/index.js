import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import "./style.css";

const skills = [
  { skill: "HTML", level: "Advance", color: "red" },
  { skill: "CSS", level: "Intermediate", color: "blue" },
  { skill: "JavaScript", level: "Intermediate", color: "orange" },
  { skill: "React", level: "Beginner", color: "purple" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./a.jpg" alt="Profile" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>Web Developer</p>
      <p>I want to be a software developer in the future.</p>
    </div>
  );
}

// Challenge 1
// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill name="HTML" color="red" icon="🎉" />
//       <Skill name="CSS" color="blue" icon="😂" />
//       <Skill name="JavaScript" color="orange" icon="❤️" />
//       <Skill name="React" color="purple" icon="👍" />
//     </div>
//   );
// }
/*
function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: props.color,
        color: "white",
        fontStyle: "bold",
      }}
    >
      <span className="icon">{props.icon}</span>
      <span>{props.name}</span>
    </div>
  );
}

*/

// Challenge 2
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}
function Skill({ skillObj }) {
  const emoji = {
    beginner: "👶",
    intermediate: "🧑",
    advance: "👴",
  };
  return (
    <div
      className="skill"
      style={{
        backgroundColor: skillObj.color,
        color: "white",
        fontStyle: "bold",
      }}
    >
      <span className="icon">
        {skillObj.level === "Beginner" ? emoji.beginner : null}
        {/* or by the simple way:
        skillObj.level === "Beginner" && emoji.beginner
         */}
        {skillObj.level === "Intermediate" ? emoji.intermediate : null}
        {skillObj.level === "Advance" ? emoji.advance : null}
      </span>
      <span>{skillObj.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
