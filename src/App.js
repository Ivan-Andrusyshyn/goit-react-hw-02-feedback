// import PropTypes from "prop-types";
import { Statistics } from "./components/statistics/statistic";
import { FeedbackOptions } from "./components/feedbackOpt/options";
import React, { Component } from "react";
import css from "./app.module.css";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendletIncrementNeutral = (e) => {
    let count = this.state.neutral;
    count += 1;
    this.setState({ neutral: count });
  };
  hendletIncrementGood = (e) => {
    let count = this.state.good;
    count += 1;
    this.setState({ good: count });
  };
  hendletIncrementBad = (e) => {
    let count = this.state.bad;
    count += 1;
    this.setState({ bad: count });
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    let percGood = good / (good + bad + neutral);
    if (good) {
      return percGood * 100;
    } else {
      return (percGood = 0);
    }
  };

  render() {
    const {
      hendletIncrementNeutral,
      hendletIncrementGood,
      hendletIncrementBad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { title } = this.props;
    const { neutral, good, bad } = this.state;
    return (
      <div className={css.container}>
        <h1>{title}</h1>
        <FeedbackOptions
          hendletIncrementNeutral={hendletIncrementNeutral}
          hendletIncrementGood={hendletIncrementGood}
          hendletIncrementBad={hendletIncrementBad}
        />
        <h2>Statistics</h2>
        {countTotalFeedback() ? (
          <Statistics
            neutral={neutral}
            good={good}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={Math.floor(
              countPositiveFeedbackPercentage()
            )}
          />
        ) : (
          <p className={css.stat_title}>No feedback given</p>
        )}
      </div>
    );
  }
}

export { App };
