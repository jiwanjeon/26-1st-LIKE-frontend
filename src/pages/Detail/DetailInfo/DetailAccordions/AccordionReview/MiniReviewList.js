import React, { Component } from 'react';
import MiniReviewItem from './MiniReviewItem';
import './MiniReviewList.scss';

export class MiniReviewList extends Component {
  render() {
    const { reviewsData } = this.props;
    return (
      <ul className="MiniReviewList">
        {reviewsData.map((review, index) => (
          <MiniReviewItem
            key={index + 1}
            title={review.title}
            reviewData={review}
          />
        ))}
      </ul>
    );
  }
}

export default MiniReviewList;
