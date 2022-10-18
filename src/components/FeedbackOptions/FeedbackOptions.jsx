import React from "react"
import PropTypes from "prop-types"


export const FeedbackOptions = ({good,neutral,bad}) => {
    return (
        <div>
        <button onClick={good}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={bad}>Bad</button>
      </div>
    )
    
}
FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}