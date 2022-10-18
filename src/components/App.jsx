import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import {Section} from "./Section/Section";


class App extends Component  {
 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackGood = () => {
    this.setState((prevState) =>
    {return {
      good: prevState.good + 1,}
    }
      )
    
  };
  onFeedbackNeitral = () => {
    this.setState((prevState) =>
    {return {
      neutral: prevState.neutral + 1,}
    }
      )
  };
  onFeedbackBad = () => {
    this.setState((prevState) =>
    {return {
      bad: prevState.bad + 1,}
    }
      )
      };
  
  countTotalFeedback(){
    const {good,neutral,bad}=this.state;
    return good+neutral+bad;
  }
  countPositiveFeedbackPercentage() {
    const total = Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
    return total ? total : 0;
  };
  
  render() {
    return (
      <div className="Feedback">

        <Section
          title={'Please leave feetback'}>
          <FeedbackOptions
        good={this.onFeedbackGood}
        neutral={this.onFeedbackNeitral}
            bad={this.onFeedbackBad}
          />
          </Section>

      <Section
          title={'Statistics'}>
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          </Section>
      </div>
    )
    
  }
};
export default App;