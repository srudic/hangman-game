import style from "./InputForm.module.css";

const InputForm = ({ requiredWord }) => {
  return (
    <div className={style.InputForm}>
      {requiredWord.map((item, index) => (
        <div className={style.Element} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default InputForm;
