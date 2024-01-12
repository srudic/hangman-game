import { useState } from "react";
import style from "./Letters.module.css";

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const Letter = ({ letter, onLetterClicked }) => {
  const [clicked, setClicked] = useState(false);

  // console.log(clicked ? letter : "ne");
  // const clickedLetter = clicked ? letter : "";

  return (
    <div
      // className={clicked ? style.LetterClicked : style.Frame}
      className={style.Frame}
      // onClick={() => setClicked(true)}
      onClick={() => onLetterClicked(letter)}
    >
      {letter.toUpperCase()}
    </div>
  );
};

const Letters = ({ onLetterClicked }) => {
  return (
    <div className={style.Alphabet}>
      {alphabet.map((letter) => (
        <Letter
          letter={letter}
          key={letter}
          onLetterClicked={onLetterClicked}
        />
      ))}
    </div>
  );
};

export default Letters;
