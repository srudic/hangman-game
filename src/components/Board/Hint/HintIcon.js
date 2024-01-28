import { FaQuestionCircle } from "react-icons/fa";
import style from "./Hint.module.css";

const HintIcon = ({ onHintIconClicked }) => {
  return (
    <div className={style.HintIcon} onClick={onHintIconClicked}>
      <FaQuestionCircle />
    </div>
  );
};

export default HintIcon;
