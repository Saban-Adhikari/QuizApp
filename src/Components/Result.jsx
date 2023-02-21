import React, { useContext } from "react";
import { QuizContext } from "../QuizHolder";

function Result(props) {
    const {correct, setExit, setStart, quizQues} = useContext(QuizContext);
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
  return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50%] border shadow-lg rounded-md overflow-hidden text-center">
            <h2 className="text-2xl p-3">{correct} are correct out of {quizQues.length}</h2>
            <button onClick={playAgain} className="border border-blue-500 p-3 text-5xl rounded">Play again</button>
      </div>
    </div>
  );
}

export default Result;
