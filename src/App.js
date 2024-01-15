import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Letters from "./components/Alphabet/Letters";
import Board from "./components/Board/Board";
import { WORD_LIST } from "../src/assets/hangman-game-word-list";
import { useState } from "react";

function App() {
  const requiredTerm = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  const [word] = useState(requiredTerm.word);
  const [hint] = useState(requiredTerm.hint);
  const [counter, setCounter] = useState(0);
  const [isLetterCorrect, setIsLetterCorrect] = useState(true);
  const [displayedWord, setDisplayedWord] = useState(
    new Array(word.length).fill("$")
  );
  console.log(word);

  // Function to find the index of the letter that is clicked in the required word
  const locations = (letter) => {
    let index = [];
    let i = -1;

    // Check if clicked letter is wrong ---> indexOf return -1 if a given element can't be found in the array
    const newStateofLetter = false;
    if (word.indexOf(letter) === -1) {
      console.log("Krivo Slovo");
      setIsLetterCorrect(newStateofLetter);
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

  console.log(counter);
  console.log(isLetterCorrect);

  return (
    <div className="App">
      <Wrapper>
        <Letters onLetterClicked={locations} />
        <Board
          requiredHint={hint}
          requiredWord={displayedWord}
          numberOfAttempts={counter}
        />
      </Wrapper>
    </div>
  );
}

export default App;
