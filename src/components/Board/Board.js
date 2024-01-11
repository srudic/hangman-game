import InputForm from "./InputForm/InputForm";
import Hint from "./Hint/Hint";
import { WORD_LIST } from "../../assets/hangman-game-word-list";
import style from "./Board.module.css";

const Board = () => {
  {
    /* “Math.random()” function to get the random number between(0-1, 1 exclusive). 
      Multiply it by the array length to get the numbers between(0-arrayLength).
      “Math.floor()” to get the index ranging from(0 to arrayLength-1). */
  }
  const requiredTerm = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  return (
    <div className={style.Board}>
      <InputForm requiredWord={requiredTerm.word} />
      <Hint requiredHint={requiredTerm.hint} />
    </div>
  );
};

export default Board;
