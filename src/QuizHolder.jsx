import React, { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

const quizQues = [
    {
        "question": "What is the name of the latest single released by BIGBANG?",
        "a": "Fantastic Baby",
        "b": "Blue",
        "c": "Still Life",
        "d": "Hard to love",
        "correct": "c"
    },
    {
        "question": "Anime where there is a character named rimuru?",
        "a": "That time i got reincarnated as a slime",
        "b": "Benriya saitou-san, Isekai ni Iku",
        "c": "Campfire Cooking in Another World with My Absurd Skill",
        "d": "One piece",
        "correct": "a"
    },
    {
        "question": "Which anime sparked the meme 'DAGA KOTOWARU'?",
        "a": "JoJo's Bizarre Adventure",
        "b": "Bungo Stray Dogs",
        "c": "Odd Taxi",
        "d": "Clannad",
        "correct": "a"
    },
    {
        "question": "Which of these movies did Timothée Chalamet starred in?",
        "a": "The Godfather",
        "b": "Beautiful Boy",
        "c": "Bird Box",
        "d": "Gladiator",
        "correct": "b"
    }
]
export default function QuizHolder(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContext.Provider value={{ start, exit, setStart, setExit, quizQues, correct, setCorrect }}>
      {props.children}
    </QuizContext.Provider>
  );
}

export { QuizContext };
