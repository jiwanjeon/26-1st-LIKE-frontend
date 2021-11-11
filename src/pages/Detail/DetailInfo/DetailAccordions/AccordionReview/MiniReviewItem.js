import React, { Component } from 'react';
import ReviewStarBar from './ReviewStarBar';
import './MiniReviewItem.scss';

export class MiniReviewItem extends Component {
  render() {
    const { reviewData } = this.props;
    const { title, rating, name, date, serial, text, image } = reviewData;

    return (
      <li className="MiniReviewItem">
        <div className="readSubject">{title}</div>
        <div className="userInfo">
          <ReviewStarBar score={rating} />
          <br />
          <div className="detail">
            {name} - {date} {serial}
          </div>
        </div>
        <p className="readComment">
          {text} <span className="seeMore">..더보기</span>
        </p>
        <img className="miniReviewPic" src={image} alt={title} />
      </li>
    );
  }
}

export default MiniReviewItem;
