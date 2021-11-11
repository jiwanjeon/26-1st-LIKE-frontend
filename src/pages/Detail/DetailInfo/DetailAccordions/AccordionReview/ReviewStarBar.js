import React, { Component } from 'react';
import './ReviewStarBar.scss';

export class ReviewStarBar extends Component {
  render() {
    const { score } = this.props;
    const stars = (100 / 5) * score;

    return (
      <div className="ReviewStarBar">
        <div style={{ width: `${stars}%` }} className="reviewStar" />
      </div>
    );
  }
}

export default ReviewStarBar;
