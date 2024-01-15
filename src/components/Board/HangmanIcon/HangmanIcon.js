import style from "./HangmanIcon.module.css";

const HangmanIcon = ({ numberOfAttempts }) => {
  return (
    <div className={style.IconWrapper}>
      <img
        src={require(`../../../assets/Hangman${numberOfAttempts}.png`)}
        alt={`Icon${numberOfAttempts}`}
      />
    </div>
  );
};

export default HangmanIcon;
