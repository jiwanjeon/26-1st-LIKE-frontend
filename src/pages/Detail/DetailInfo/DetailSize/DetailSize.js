import React, { Component } from 'react';
import './DetailSize.scss';

export class DetailSize extends Component {
  render() {
    return (
      <div className="DetailSize">
        <h2>사이즈 선택</h2>
        <div className="sizeList">
          <span className="input-ratio">250</span>
          <span className="input-ratio">255</span>
          <span className="input-ratio">260</span>
          <span className="input-ratio">265</span>
          <span className="input-ratio">270</span>
          <span className="input-ratio">275</span>
          <span className="input-ratio">280</span>
          <span className="input-ratio">285</span>
          <span className="input-ratio">290</span>
          <span className="input-ratio">295</span>
          <span className="input-ratio">300</span>
          <span className="input-ratio">305</span>
          <span className="input-ratio">310</span>
        </div>
      </div>
    );
  }
}

export default DetailSize;
