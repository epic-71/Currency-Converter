import { useQuiz } from "../Context/QuizContext";

export default function Option() {
  const { questions, answer, index, dispatch } = useQuiz();
  const hasAnswered = answer !== null;
  const currentQuestion = questions[index];
  return (
    <div className="options">
      {currentQuestion.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""}
          ${
            hasAnswered
              ? index === currentQuestion.correctOption
                ? "correct"
                : "wrong"
              : " "
          }`}
          key={option}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index });
          }}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
