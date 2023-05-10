import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p style={{ fontSize: "18px" }}>{message}</p>;
};
export { Notification };
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
