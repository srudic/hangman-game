import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Letters from "./components/Alphabet/Letters";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Letters />
        <Board />
      </Wrapper>
    </div>
  );
}

export default App;
