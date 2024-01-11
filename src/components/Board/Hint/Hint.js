import style from "./Hint.module.css";

const Hint = ({ requiredHint }) => {
  return <div className={style.Hint}>HINT: {requiredHint}</div>;
};

export default Hint;
