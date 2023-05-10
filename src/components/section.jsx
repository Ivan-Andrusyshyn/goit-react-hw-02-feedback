import css from "./section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
export { Section };
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
