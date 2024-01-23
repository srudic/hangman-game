import { useState, useEffect } from "react";
import style from "./Letters.module.css";

// Fill array with ascii code for lower case
const alpha = Array.from(Array(26)).map((e, i) => i + 97);
// Transform ascii code into characters
const alphabet = alpha.map((x) => String.fromCharCode(x));

const Letter = ({ letter, onLetterClicked, reset }) => {
  const [clicked, setClicked] = useState(false);

  // On change reset state (when it is true) set clicked state to false
  useEffect(() => {
    if (reset) setClicked(false);
  }, [reset]);

  return (
    <div
      className={clicked ? style.LetterClicked : style.Frame}
      onClick={() => {
        onLetterClicked(letter);
        setClicked(true);
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
};

const Letters = ({ onLetterClicked, reset }) => {
  return (
    <div className={style.Alphabet}>
      {alphabet.map((letter) => (
        <Letter
          letter={letter}
          key={letter}
          onLetterClicked={onLetterClicked}
          reset={reset}
        />
      ))}
    </div>
  );
};

export default Letters;
