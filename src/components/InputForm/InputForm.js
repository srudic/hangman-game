import style from "./InputForm.module.css";

const test = "guitar";

const InputForm = () => {
  return (
    <div className={style.InputForm}>
      {test
        .toUpperCase()
        .split("")
        .map((item, index) => (
          <div className={style.Element}>{item}</div>
        ))}
    </div>
  );
};

export default InputForm;
