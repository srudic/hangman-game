import "./App.css";
import { Helmet } from "react-helmet";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Letters from "./components/Alphabet/Letters";
import Board from "./components/Board/Board";
import { WORD_LIST } from "../src/assets/hangman-game-word-list";
import { useEffect, useState } from "react";
import Victory from "./components/Victory/Victory";

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
  const [victory, setVictory] = useState(false);

  const [displayedWord, setDisplayedWord] = useState(
    new Array(word.length).fill("$")
  );
  console.log("Trazena rijec", word.toUpperCase());
  console.log("Hint", hint);
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

  useEffect(() => {
    if (displayedWord.indexOf("$") === -1) {
      setVictory(true);
    }
  }, [displayedWord]);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  // Function to reset all states
  const onReset = () => {
    const requiredTerm = wordPicker();
    setWord(requiredTerm.word);
    setHint(requiredTerm.hint);
    setCounter(0);
    setDisplayedWord(new Array(requiredTerm.word.length).fill("$"));
    setReset(true);
    setVictory(false);
  };

  return (
    <div className="App">
      <Helmet>
        <title>Hangman Game</title>
        <meta
          name="description"
          content="The Hangman Game is a classic word-guessing game where players try to guess a hidden word by suggesting letters."
        />
        <meta name="keywords" content="hangman, word, hint, game" />
        <meta name="author" content="https://github.com/srudic" />
      </Helmet>
      <Wrapper>
        <Letters onLetterClicked={locations} reset={reset} />
        <Board
          requiredHint={hint}
          requiredWord={displayedWord}
          numberOfAttempts={counter}
          onPlayAgainClicked={onReset}
        />
        {victory && <Victory onPlayAgainClicked={onReset} />}
      </Wrapper>
    </div>
  );
}

export default App;
