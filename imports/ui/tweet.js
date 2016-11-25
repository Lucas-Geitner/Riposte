import React, { Component, PropTypes } from 'react';
import { Tweets } from '../api/tweets';

class Tweet extends Component {
  toggleChecked() {
    Tweets.update(this.props.tweet._id, {
      $set: { checked: !this.props.tweet.checked },
    });
  }
  deleteTask() {
    Tweets.remove(this.props.tweet._id);
  }
  updateTweet(e) {
    e.preventDefault();
    const text = this.name.value.trim();
    Tweets.update(this.props.tweet._id, {
      $set: { text },
    });
  }
  render() {
    const { text, id } = this.props.tweet;
    const tweetAprove = this.props.tweet.checked ? 'hide' : '';
    return (
      <div className ={tweetAprove + 'box'}>
        <button className="delete" onClick={e => this.deleteTask()}>
            &times;
        </button>

        <input
          type="checkbox"
          className="count"
          readOnly
          checked={this.props.tweet.checked}
          onClick={e => this.toggleChecked()}
        />
        <form onSubmit={e => this.updateTweet(e)}>
          <input
            type="text"
            className="onUpdateTweet"
            defaultValue={text}
            ref={(input) => this.name = input}
          />
        </form>
      </div>
    );
  }
}


Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

export default Tweet;
