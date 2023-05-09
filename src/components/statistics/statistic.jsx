import css from "./stat.module.css";
import PropTypes from "prop-types";

const Statistics = ({
  good,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
  neutral,
}) => {
  return (
    <ul className={css.stat__list}>
      <li className={css.stat__list_item}>
        <p>Good:{good}</p>
      </li>
      <li className={css.stat__list_item}>
        <p>Neutral:{neutral}</p>
      </li>
      <li className={css.stat__list_item}>
        <p>Bad:{bad}</p>
      </li>
      <li className={css.stat__list_item}>
        <p>Total:{countTotalFeedback}</p>
      </li>
      <li className={css.stat__list_item}>
        <p>Positive feedback:{countPositiveFeedbackPercentage}%</p>
      </li>
    </ul>
  );
};
export { Statistics };
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
};
