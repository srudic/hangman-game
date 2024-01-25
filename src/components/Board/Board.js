import InputForm from "./InputForm/InputForm";
import Hint from "./Hint/Hint";
import HangmanIcon from "./HangmanIcon/HangmanIcon";
import style from "./Board.module.css";
import GameOver from "../GameOver/GameOver";
import HintIcon from "./Hint/HintIcon";
import { useState } from "react";

/* “Math.random()” function to get the random number between(0-1, 1 exclusive). 
      Multiply it by the array length to get the numbers between(0-arrayLength).
      “Math.floor()” to get the index ranging from(0 to arrayLength-1). */

const Board = ({
  requiredWord,
  requiredHint,
  numberOfAttempts,
  onPlayAgainClicked,
}) => {
  const [showHint, setShowHint] = useState(false);
  const handleHintIconClick = () => {
    setShowHint(true);
  };
  return (
    <div className={style.Board}>
      <HintIcon onHintIconClicked={handleHintIconClick} />
      {showHint ? <Hint requiredHint={requiredHint} /> : null}
      {
        // Check if number of attempts is greater than zero --> show Hangman icon (depending on the number of wrong letter inputs)
        // numberOfAttempts > 0 && numberOfAttempts < 8 ? (
        //   <HangmanIcon numberOfAttempts={numberOfAttempts} />
        // ) : null
      }
      {
        // Check if number of attempts is greater than 7 ---> GAME OVER
        numberOfAttempts >= 7 ? (
          <GameOver onPlayAgainClicked={onPlayAgainClicked} />
        ) : null
      }
      <InputForm requiredWord={requiredWord} />
    </div>
  );
};

export default Board;
