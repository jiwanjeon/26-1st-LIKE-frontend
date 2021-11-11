import React, { Component } from 'react';
import ReviewStarBar from './ReviewStarBar';
import './DetailAccordions.scss';

export class DetailAccordions extends Component {
  render() {
    return (
      <div className="DetailAccordions">
        <div className="ukAccordion">
          <h2>고객안내</h2>
        </div>
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>리뷰(71)</h2>
            <ReviewStarBar score="4.6" />
          </div>
          <div className="drawer productReview">
            <div className="starsTotalInfo">
              <ReviewStarBar score="4.6" />
              <span className="totalStarPoint">4.6점</span>
              <div>리뷰 작성하기</div>
            </div>
            <ul className="miniReviewList">
              <li className="miniReview">
                <div className="readSubject">
                  휼륭한 로우컷 농구화 키이리 로우4
                </div>
                <div calssName="userInfo">
                  <ReviewStarBar score="5" />
                  김*홍 - 2021.11.17 CZ0105-005 285
                </div>
                <p className="readComment">
                  올해 <span className="seeMore">..더보기</span>
                </p>
                <img src="" alt="임시" />
              </li>
            </ul>
          </div>
        </div>
        <div className="ukAccordion">
          <h2>배송</h2>
        </div>
        <div className="ukAccordion">
          <h2>반품/AS</h2>
        </div>
      </div>
    );
  }
}

export default DetailAccordions;
