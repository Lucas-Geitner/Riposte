import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tweets } from '../api/tweets';
import Tweet from './tweet.js';

class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = this.name.value.trim();
    Tweets.insert({
      text,
      createdAt: new Date(), // current time
    });
    this.name.value = '';
  }

  renderTweet() {
    return this.props.tweets.map(tweet => (
      <Tweet key={tweet.id} tweet={tweet} />
      ));
  }

  render() {
    return (
      <div className="container">
      <header>
      <h1>Benoit Hamon</h1>
      </header>
      <div className="tweets-container">
      <form className="tweet-order box" onSubmit={e => this.handleSubmit(e)} >
      <input
      type="text"
      ref={input => this.name = input}
      placeholder="Type to add new tasks"
      />
      <div className="commentaireBox">
      <div className="Commentaire">
      {this.props.tweets.map(tweet => (
        <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </div>
      </div>
      </form>
      </div>
      </div>
      );
  }
}

App.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default createContainer(() => ({
  tweets: Tweets.find({}, { sort: { createdAt: -1 } }).fetch(),

}), App);
