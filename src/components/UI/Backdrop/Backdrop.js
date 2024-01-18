import style from "./Backdrop.module.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className={style.Backdrop}>{props.children}</div>
  ) : null;
};

export default Backdrop;
