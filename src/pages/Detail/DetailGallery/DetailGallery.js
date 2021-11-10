import React, { Component } from 'react';
import './DetailGallery.scss';

export class DetailGallery extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="DetailGallery">
        <ul className="detailGalleryInner">
          {image &&
            image.map((url, index) => (
              <li key={index}>
                <img src={url} alt="임시로 사용중!" />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default DetailGallery;
