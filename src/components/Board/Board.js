import InputForm from "./InputForm/InputForm";
import Hint from "./Hint/Hint";

import style from "./Board.module.css";

/* “Math.random()” function to get the random number between(0-1, 1 exclusive). 
      Multiply it by the array length to get the numbers between(0-arrayLength).
      “Math.floor()” to get the index ranging from(0 to arrayLength-1). */

const Board = ({ requiredTerm }) => {
  return (
    <div className={style.Board}>
      <InputForm requiredWord={requiredTerm.word} />
      <Hint requiredHint={requiredTerm.hint} />
    </div>
  );
};

export default Board;
