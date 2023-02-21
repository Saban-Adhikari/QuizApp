import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./QuizHolder";
import { useContext } from "react";

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
      {exit === false ? (
        <>{start === true ? <Quiz /> : <Start />}</>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;
