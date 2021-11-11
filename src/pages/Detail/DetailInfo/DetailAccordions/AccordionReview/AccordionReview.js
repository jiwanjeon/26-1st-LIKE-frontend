import React, { Component } from 'react';
import MiniReviewList from './MiniReviewList';
import ReviewStarBar from './ReviewStarBar';
import './AccordionReview.scss';

export class AccordionReview extends Component {
  render() {
    const { isReview, reviewScore, reviewsData } = this.props;

    return (
      <div className={`AccordionReview popDetail ${isReview && 'activate'}`}>
        <div className="popDetailInner">
          <div className="starsTotalInfo">
            <div className="starAverage">
              <ReviewStarBar score={reviewScore} />
              <span className="totalStarPoint">{reviewScore}점</span>
            </div>
            <span className="writeReview">리뷰 작성하기</span>
          </div>
          <MiniReviewList reviewsData={reviewsData} />
        </div>
      </div>
    );
  }
}

export default AccordionReview;
