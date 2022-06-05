import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({
  options,
  leaveFeedback: leaveFeedback,
}) {
  return (
    <section>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={leaveFeedback}
        >
          {option}
        </button>
      ))}
    </section>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
