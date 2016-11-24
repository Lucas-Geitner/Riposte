import React, { Component, PropTypes } from 'react';


const Tweet = (props) => (
  <li key={props.id}>
    {props.tweet.text}
  </li>

);


Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

export default Tweet;
