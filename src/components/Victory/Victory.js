import Backdrop from "../UI/Backdrop/Backdrop";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import style from "./Victory.module.css";

const Victory = ({ onPlayAgainClicked }) => {
  const { width, height } = useWindowSize();
  const [showPlayAgainButton, setShowPlayAgainButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPlayAgainButton(!showPlayAgainButton);
    }, 800);
  }, []);
  return (
    <Backdrop show>
      <Confetti width={width} height={height} />
      <div className={style.VicoryTitle}>VICTORY</div>
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

export default Victory;
