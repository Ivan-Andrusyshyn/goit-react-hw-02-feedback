import css from "./options.module.css";
import PropTypes from "prop-types";
const FeedbackOptions = ({ hendlerIncrement }) => {
  return (
    <ul className={css.btn_list}>
      <li className={css.list__item_btn}>
        <button className={css.btn} onClick={hendlerIncrement} id="good">
          Good
        </button>
      </li>
      <li className={css.list__item_btn}>
        <button className={css.btn} onClick={hendlerIncrement} id="neutral">
          Neutral
        </button>
      </li>
      <li className={css.list__item_btn}>
        <button className={css.btn} onClick={hendlerIncrement} id="bad">
          Bad
        </button>
      </li>
    </ul>
  );
};
export { FeedbackOptions };
FeedbackOptions.propTypes = {
  hendlerIncrement: PropTypes.func,
};
