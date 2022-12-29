import React, { Component } from "react";

import { Section } from "./Section/Section";
import { Container } from "./App.styled";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FreedbackOptions/FreedbackOptions";
import { Statistics} from "./Statistics/Statictics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handlFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback < 1) {
      return 0;
    }

    return Math.round((good * 100) / totalFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handlFeedback}
          ></FeedbackOptions>
        </Section>
       {this.countTotalFeedback() === 0
          ?
          <Notification message="There is no feedback" />
          :
          <Section title="Statictics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad }
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          </Section>
        }

      </Container>
      
    )
    
        }}
