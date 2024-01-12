import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Letters from "./components/Alphabet/Letters";
import Board from "./components/Board/Board";
import { WORD_LIST } from "../src/assets/hangman-game-word-list";

function App() {
  const requiredTerm = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  const word = requiredTerm.word;

  const locations = (substring) => {
    let a = [],
      i = -1;

    console.log(word);
    while ((i = word.indexOf(substring, i + 1)) >= 0) {
      a.push(i);
      console.log(i);
    }

    console.log(a);
    return a;
  };
  console.log(locations);
  return (
    <div className="App">
      <Wrapper>
        <Letters onLetterClicked={locations} />
        <Board requiredTerm={requiredTerm} />
      </Wrapper>
    </div>
  );
}

export default App;
