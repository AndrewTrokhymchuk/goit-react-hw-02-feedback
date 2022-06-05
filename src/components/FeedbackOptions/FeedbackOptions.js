import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({
  options,
  leaveFeedback: onleaveFeedback,
}) {
  return (
    <section>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onleaveFeedback}
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
