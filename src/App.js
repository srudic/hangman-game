import "./App.css";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Letters from "./components/Alphabet/Letters";
import Board from "./components/Board/Board";
import { WORD_LIST } from "../src/assets/hangman-game-word-list";
import { useState } from "react";

const wordPicker = () => {
  const word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  return word;
};

function App() {
  const requiredTerm = wordPicker();
  const [word, setWord] = useState(requiredTerm.word);
  const [hint, setHint] = useState(requiredTerm.hint);
  const [counter, setCounter] = useState(0);
  const [reset, setReset] = useState(false);

  const [displayedWord, setDisplayedWord] = useState(
    new Array(word.length).fill("$")
  );
  console.log(word);

  // Function to find the index of the letter that is clicked in the required word
  const locations = (letter) => {
    let index = [];
    let i = -1;

    // Check if clicked letter is wrong ---> indexOf return -1 if a given element can't be found in the array
    if (word.indexOf(letter) === -1) {
      console.log("Krivo Slovo");
      // Count how many times clicked letters are wrong
      setCounter((count) => count + 1);
    }

    while ((i = word.indexOf(letter, i + 1)) >= 0) {
      index.push(i);
    }

    // Copy of displayed word
    const newWord = [...displayedWord];
    // For each index change character in the copy of displayed word
    index.forEach((el) => {
      newWord[el] = letter;
    });
    // Save copy of displayed word as new displayed word
    setDisplayedWord(newWord);
    return index;
  };

  const onReset = () => {
    const requiredTerm = wordPicker();
    setWord(requiredTerm.word);
    setHint(requiredTerm.hint);
    setCounter(0);
    setDisplayedWord(new Array(word.length).fill("$"));
    setReset(!reset);
  };

  return (
    <div className="App">
      <Wrapper>
        <Letters onLetterClicked={locations} reset={reset} />
        <Board
          requiredHint={hint}
          requiredWord={displayedWord}
          numberOfAttempts={counter}
          onPlayAgainClicked={onReset}
        />
      </Wrapper>
    </div>
  );
}

export default App;
