import React, { Component } from 'react';
import './QuantitySelector.scss';

export class QuantitySelector extends Component {
  render() {
    const { maxQuantity, quantity, handleInput, increment, decrement } =
      this.props;

    return (
      <div className="QuantitySelector">
        <h2>수량</h2>
        <div className="quantitySelector">
          <input type="text" value={quantity} onChange={handleInput} />
          <button
            onClick={decrement}
            className={`btn decrement ${quantity === 1 && 'deactivate'}`}
          >
            -
          </button>
          <button
            onClick={increment}
            className={`btn increament ${
              quantity === maxQuantity && 'deactivate'
            }`}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default QuantitySelector;
