import style from "./Button.module.css";

const Button = ({ text, onPlayAgainClicked }) => {
  return (
    <div
      className={style.PlayAgain}
      onClick={() => {
        onPlayAgainClicked();
      }}
    >
      {text}
    </div>
  );
};

export default Button;
