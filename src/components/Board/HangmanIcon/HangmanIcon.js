import style from "./HangmanIcon.module.css";

const HangmanIcon = ({ numberOfAttempts }) => {
  return (
    <div className={style.IconWrapper}>
      <div className={style.Image}>
        <img
          src={require(`../../../assets/Hangman${numberOfAttempts}.png`)}
          alt={`Icon${numberOfAttempts}`}
        />
      </div>
    </div>
  );
};

export default HangmanIcon;
