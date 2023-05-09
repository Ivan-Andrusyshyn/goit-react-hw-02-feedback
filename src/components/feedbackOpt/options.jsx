import css from "./options.module.css";
const FeedbackOptions = ({
  hendletIncrementBad,
  hendletIncrementGood,
  hendletIncrementNeutral,
}) => {
  return (
    <ul className={css.btn_list}>
      <li className={css.list__item_btn}>
        <button className={css.btn} onClick={hendletIncrementGood}>
          Good
        </button>
      </li>
      <li className={css.list__item_btn}>
        <button className={css.btn} onClick={hendletIncrementNeutral}>
          Neutral
        </button>
      </li>
      <li className={css.list__item_btn}>
        <button className={css.btn} onClick={hendletIncrementBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};
export { FeedbackOptions };
