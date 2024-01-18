import InputForm from "./InputForm/InputForm";
import Hint from "./Hint/Hint";
import HangmanIcon from "./HangmanIcon/HangmanIcon";
import style from "./Board.module.css";
import GameOver from "../GameOver/GameOver";

/* “Math.random()” function to get the random number between(0-1, 1 exclusive). 
      Multiply it by the array length to get the numbers between(0-arrayLength).
      “Math.floor()” to get the index ranging from(0 to arrayLength-1). */

const Board = ({ requiredWord, requiredHint, numberOfAttempts }) => {
  return (
    <div className={style.Board}>
      {
        // Check if number of attempts is greater than zero --> show Hangman icon (depending on the number of wrong letter inputs)
        numberOfAttempts > 0 && numberOfAttempts < 8 ? (
          <HangmanIcon numberOfAttempts={numberOfAttempts} />
        ) : null
      }
      {
        // Check if number of attempts is greater than 7 ---> GAME OVER
        numberOfAttempts >= 7 ? <GameOver /> : null
      }
      <InputForm requiredWord={requiredWord} />
      <Hint requiredHint={requiredHint} />
    </div>
  );
};

export default Board;
