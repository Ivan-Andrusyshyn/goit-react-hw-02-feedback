// import PropTypes from "prop-types";
import { Statistics } from "./components/statistics/statistic";
import { FeedbackOptions } from "./components/feedbackOpt/options";
import React, { Component } from "react";
import { Notification } from "components/notification/notif";
import { Section } from "components/section";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerIncrement = (e) => {
    const { id } = e.target;
    this.setState((prevState) => ({ [id]: prevState[id] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    let percGood = good / (good + bad + neutral);
    return good ? Math.floor(percGood * 100) : 0;
  };

  render() {
    const {
      hendlerIncrement,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { neutral, good, bad } = this.state;
    return (
      <Section title={"Please leave feedback"}>
        <FeedbackOptions hendlerIncrement={hendlerIncrement} />
        <h2>Statistics</h2>
        {countTotalFeedback() ? (
          <Statistics
            neutral={neutral}
            good={good}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </Section>
    );
  }
}

export { App };
