import Option from "./Option";

export default function Question({ questions, answer, dispatch }) {

  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} answer={answer} dispatch={dispatch} />
    </div>
  );
}
