import React, { Component } from 'react';

export class ColorItem extends Component {
  render() {
    return <span>{this.props.color} </span>;
  }
}

export default ColorItem;
