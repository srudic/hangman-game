import style from "./InputForm.module.css";

const test = "guitar";

const InputForm = ({ requiredWord }) => {
  return (
    <div className={style.InputForm}>
      {requiredWord
        .toUpperCase()
        .split("")
        .map((item, index) => (
          <div className={style.Element} key={index}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default InputForm;
