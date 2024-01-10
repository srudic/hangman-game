import style from "./Letters.module.css";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Letters = () => {
  return (
    <div className={style.Alphabet}>
      {alphabet.map((letter) => (
        <div className={style.Frame}>{letter}</div>
      ))}
    </div>
  );
};

export default Letters;
