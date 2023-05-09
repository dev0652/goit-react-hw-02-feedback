import React, { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';
import Statistics from '../Statistics';

import { Heading, Wrapper } from './App.styled';

// ######################################

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, value) => prev + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    // good / total * 100%
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  updateFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const {
      state,
      updateFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    // const { good, neutral, bad } = state;

    return (
      <Wrapper>
        aaaaaaaaaaaa
        <Section
          title="Rate our service"
          children={
            <>
              <FeedbackOptions
                options={state}
                onLeaveFeedback={updateFeedback}
              />

              <Heading>Statistics</Heading>

              {Object.values(state).some(el => el !== 0) ? (
                <Statistics
                  // good={good}
                  // neutral={neutral}
                  // bad={bad}
                  options={state}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
                />
              ) : (
                <Notification message="There is no feedback yet" />
              )}
            </>
          }
        />
      </Wrapper>
    );
  }
}

export default App;
