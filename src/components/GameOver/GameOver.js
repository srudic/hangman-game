import Backdrop from "../UI/Backdrop/Backdrop";
import style from "./GameOver.module.css";

const GameOver = () => {
  const title = "GAME OVER";
  return (
    <Backdrop show>
      <div className={style.GameOver}>
        {title.split("").map((letter) => (
          <div className={style.Letter}>{letter}</div>
        ))}
      </div>
    </Backdrop>
  );
};

export default GameOver;
