import Backdrop from "../UI/Backdrop/Backdrop";
import style from "./GameOver.module.css";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

const GameOver = ({ onPlayAgainClicked }) => {
  const title = "GAME OVER";
  const [showPlayAgainButton, setShowPlayAgainButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPlayAgainButton(!showPlayAgainButton);
    }, 800);
  }, []);

  return (
    <Backdrop show>
      <div className={style.GameOver}>
        {title.split("").map((letter, i) => (
          <div className={style.Letter} key={letter + i}>
            {letter}
          </div>
        ))}
      </div>
      <div style={{ visibility: showPlayAgainButton ? "visible" : "hidden" }}>
        <Button
          text="Play again"
          name="PlayAgain"
          onPlayAgainClicked={onPlayAgainClicked}
        />
      </div>
    </Backdrop>
  );
};

export default GameOver;
