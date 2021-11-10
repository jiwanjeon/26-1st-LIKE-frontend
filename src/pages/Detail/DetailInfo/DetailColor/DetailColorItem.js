import React, { Component } from 'react';
import './DetailColorItem.scss';

export class DetailColorItem extends Component {
  render() {
    const { color } = this.props;
    return <span className="DetailColorItem">{color}</span>;
  }
}

export default DetailColorItem;
