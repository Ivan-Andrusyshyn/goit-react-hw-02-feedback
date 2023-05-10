import css from "./options.module.css";
import PropTypes from "prop-types";
const FeedbackOptions = ({ hendlerIncrement, options }) => {
  return (
    <ul className={css.btn_list}>
      {options.map((el) => {
        return (
          <li className={css.list__item_btn} key={el}>
            <button className={css.btn} onClick={hendlerIncrement} id={el}>
              {toUpper(el)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
const toUpper = (el) => {
  return el.replace(el[0], el[0].toUpperCase());
};
export { FeedbackOptions };
FeedbackOptions.propTypes = {
  hendlerIncrement: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
