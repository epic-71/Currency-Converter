import { useQuiz } from "../Context/QuizContext";

export default function FinishScreen() {
  const { dispatch, points, maxPossiblePoints, highscore } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}
        %)
      </p>
      <p className="highscore">High score: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
