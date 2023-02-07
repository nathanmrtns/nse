import { useState, useEffect } from "react";
import { getRandomInt } from "@/utils";
import QUESTIONS from "@/api/questions";
import Card from "@/components/card";
import styles from "@/styles/Board.module.css";

type Level = "levelOne" | "levelTwo" | "levelThree";

export default function Board() {
  const [currentLevel, setCurrentLevel] = useState<Level>("levelOne");
  const [questionIndex, setQuestionIndex] = useState(0);

  function getLevelSize(level: "levelOne" | "levelTwo" | "levelThree"): number {
    return QUESTIONS[level].length;
  }

  function randomizeQuestion() {
    setQuestionIndex(getRandomInt(getLevelSize(currentLevel)));
  }

  function changeLevel(level: Level) {
    return () => {
      setCurrentLevel(level);
    };
  }

  useEffect(() => {
    randomizeQuestion();
  }, [currentLevel]);

  const currentQuestion = (level: Level, index: number) =>
    QUESTIONS[level][questionIndex];

  return (
    <div className={styles.board}>
      <Card question={currentQuestion(currentLevel, questionIndex)} />

      <div className={styles.buttons}>
        <button
          className={currentLevel === "levelOne" ? styles.button__active : ""}
          onClick={changeLevel("levelOne")}
        >
          Level 1
        </button>
        <button
          className={currentLevel === "levelTwo" ? styles.button__active : ""}
          onClick={changeLevel("levelTwo")}
        >
          Level 2
        </button>
        <button
          className={currentLevel === "levelThree" ? styles.button__active : ""}
          onClick={changeLevel("levelThree")}
        >
          Level 3
        </button>
      </div>
      <button onClick={() => randomizeQuestion()}>Next Question</button>
    </div>
  );
}
