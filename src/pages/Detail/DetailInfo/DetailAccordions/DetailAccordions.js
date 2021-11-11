import React, { Component } from 'react';
import ReviewStarBar from './AccordionReview/ReviewStarBar';
import AccordionReview from './AccordionReview/AccordionReview';
import './DetailAccordions.scss';

export class DetailAccordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReview: false,
    };
  }

  toggleAccordion = () => {
    const { isReview } = this.state;
    this.setState({
      isReview: !isReview,
    });
  };

  render() {
    const { isReview } = this.state;
    const { reviewsData } = this.props;

    return (
      <div className="DetailAccordions">
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>고객안내</h2>
          </div>
        </div>
        <div className="ukAccordion">
          <div className="popTitle">
            <h2>리뷰({reviewsData.total_number_of_reviews})</h2>
            <div className="toggleArrow">
              <ReviewStarBar score={reviewsData.average_rating} />
              <span onClick={this.toggleAccordion}>{`<`}</span>
            </div>
          </div>
          <AccordionReview
            isReview={isReview}
            reviewScore={reviewsData.average_rating}
            reviewsData={reviewsData.reviews}
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
