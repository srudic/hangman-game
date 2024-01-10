import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Letters from "./components/Alphabet/Letters";
import InputForm from "./components/InputForm/InputForm";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Letters />
        <InputForm />
      </Wrapper>
    </div>
  );
}

export default App;
