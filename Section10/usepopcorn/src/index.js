import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useState } from "react";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        color="#f78"
        size={64}
        className="test"
        defaultRating={3}
        onSetRating={setRating}
      />
      <p>This movie was rated {rating} stars</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color="#f49"
      size={64}
      className="test"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
