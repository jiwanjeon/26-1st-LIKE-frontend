import React, { Component } from 'react';

export class ReviewStarBar extends Component {
  render() {
    const stars = (100 / 5) * this.props.score;
    return (
      <div className="reviewStarBar">
        <div style={{ width: `${stars}%` }} className="reviewStar" />
      </div>
    );
  }
}

export default ReviewStarBar;
