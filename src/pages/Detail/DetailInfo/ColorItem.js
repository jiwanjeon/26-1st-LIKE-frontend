import React, { Component } from 'react';
import './ColorItem.scss';

export class ColorItem extends Component {
  render() {
    const { color } = this.props;
    return <span className="ColorItem">{color}</span>;
  }
}

export default ColorItem;
