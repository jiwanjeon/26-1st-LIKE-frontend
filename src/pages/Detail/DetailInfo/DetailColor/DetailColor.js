import React, { Component } from 'react';
import ColorItem from './DetailColorItem';

export class DetailColor extends Component {
  render() {
    const { colors } = this.props;
    return (
      <div className="DetailColor">
        <div className="DetailColorInner">
          {colors &&
            colors.map((colors, index) => (
              <ColorItem key={index + 1} color={colors} />
            ))}
        </div>
      </div>
    );
  }
}

export default DetailColor;
