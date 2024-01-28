import style from "./Hint.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { AiOutlineBulb } from "react-icons/ai";
const Hint = ({ requiredHint, handleHintClose }) => {
  return (
    <Backdrop show handleHintClose={handleHintClose}>
      <div className={style.HintContainer}>
        <div className={style.HintText}>
          <div className={style.HintTitleContainer}>
            <AiOutlineBulb className={style.BulbIcon} />
            <div className={style.HintTitle}>HINT</div>
          </div>
          {requiredHint}
        </div>
      </div>
    </Backdrop>
  );
};

export default Hint;
