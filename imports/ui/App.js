import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tweets } from '../api/tweets';
import Tweet from './tweet.js';


class App extends Component {

  renderTweet() {
    return this.props.tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Benoit Hamon</h1>
          <ul>
            {this.props.tweets.map((tweet) => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tweets: Tweets.find({}).fetch(),
  };
}, App);
