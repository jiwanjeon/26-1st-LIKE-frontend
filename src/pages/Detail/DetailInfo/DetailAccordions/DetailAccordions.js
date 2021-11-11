import React, { Component } from 'react';
import ReviewStarBar from './AccordionReview/ReviewStarBar';
import AccordionReview from './AccordionReview/AccordionReview';
import { Config } from '../../../../config';
import './DetailAccordions.scss';

export class DetailAccordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: [],
      isReview: false,
      reviewScore: 0,
      reviewUrl: Config[0].accordianReview,
      token: Config[1].token,
    };
  }

  componentDidMount() {
    this.getReviewData();
  }

  getReviewData = () => {
    const { reviewUrl, token } = this.state;

    fetch(reviewUrl, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewsData: data.results,
          reviewScore: this.calculateScore(data.results),
        });
      });
  };

  calculateScore = reviews => {
    const averageScore =
      reviews
        .map(review => Number(review.rating))
        .reduce((accumulator, score) => accumulator + score) / reviews.length;

    return averageScore.toFixed(1);
  };

  toggleAccordion = () => {
    const { isReview } = this.state;
    this.setState({
      isReview: !isReview,
    });
  };

  render() {
    const { isReview, reviewsData, reviewScore } = this.state;

    return (
      <div className="DetailAccordions">
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>고객안내</h2>
          </div>
        </div>
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>리뷰(71)</h2>
            <div className="toggleArrow">
              <ReviewStarBar score={reviewScore} />
              <span onClick={this.toggleAccordion}>{`<`}</span>
            </div>
          </div>
          <AccordionReview
            isReview={isReview}
            reviewScore={reviewScore}
            reviewsData={reviewsData}
          />
        </div>
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>배송</h2>
          </div>
        </div>
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>반품/AS</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailAccordions;
