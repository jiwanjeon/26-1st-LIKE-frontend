import React, { Component } from 'react';
import './DetailAccordions.scss';

export class DetailAccordions extends Component {
  render() {
    return (
      <div className="DetailAccordions">
        <div className="uk-accordion">
          <h2>고객안내</h2>
        </div>
        <div className="uk-accordion">
          <h2>리뷰</h2>
        </div>
        <div className="uk-accordion">
          <h2>배송</h2>
        </div>
        <div className="uk-accordion">
          <h2>반품/AS</h2>
        </div>
      </div>
    );
  }
}

export default DetailAccordions;
