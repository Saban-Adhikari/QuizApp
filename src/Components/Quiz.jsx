import React, { useContext, useState } from "react";
import { QuizContext } from "../QuizHolder";

function Quiz() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Box current={current} next={setCurrent} />
    </div>
  );
}

const Box = ({ current, next }) => {
  const { quizQues,correct,setCorrect,setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");
  const saveHandler = () => {
    if(quizQues[current].correct === ans){
        setCorrect(correct+1);
    }
    setAns("");
    if((current+1) === quizQues.length){
        setExit(true);
    }else{
        next(current+1);
    }
  };
  return (
    <div className="w-[50%] border shadow-lg rounded-md overflow-hidden">
      <div className="p-2 text-2xl"> {current+1}) {quizQues[current].question}</div>
      <div className="grid grid-cols-2 mt-3">
        <div
          className={`p-2 border ${
            ans === "a" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("a")}
        >
          {quizQues[current].a}
        </div>
        <div
          className={`p-2 border ${
            ans === "b" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("b")}
        >
          {quizQues[current].b}
        </div>
        <div
          className={`p-2 border ${
            ans === "c" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("c")}
        >
          {quizQues[current].c}
        </div>
        <div
          className={`p-2 border ${
            ans === "d" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("d")}
        >
          {quizQues[current].d}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="h-[30px] px-3 bg-orange-700 text-white cursor-pointer" onClick={() => setAns("")}>Reset</div>
        <div
          className="h-[30px] px-3 bg-green-700 text-white cursor-pointer" 
          onClick={saveHandler}
        >
          Save & Next
        </div>
        <div className="h-[30px] px-3 bg-red-700 text-white cursor-pointer" onClick={() => setExit(true)}>Exit</div>
      </div>
    </div>
  );
};
export default Quiz;
