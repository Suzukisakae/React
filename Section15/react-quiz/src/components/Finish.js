function Finish({ points, maxPossiblePoints, highscore }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100, 2);
  let emoji;
  if (percentage === 100) {
    emoji = "🎉";
  } else if (percentage >= 80) {
    emoji = "😄";
  } else if (percentage >= 60) {
    emoji = "😐";
  } else {
    emoji = "😢";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        Your score is <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        points. That's {percentage}%.
      </p>
      <p className="highscore">Highscore: {highscore}</p>
    </>
  );
}

export default Finish;
