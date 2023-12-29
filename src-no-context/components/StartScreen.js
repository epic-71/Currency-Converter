export default function  StartScreen({ num, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to react Quiz</h2>
      <h3>{num} questions to test your react mastery </h3>
      <button className="btn btn-ui" onClick={()=>dispatch({ type: "start" })}>
        Lets's Start
      </button>
    </div>
  );
}
