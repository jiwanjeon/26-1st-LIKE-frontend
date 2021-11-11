import React, { Component } from 'react';
import './QuantitySelector.scss';

export class SelectQuantity extends Component {
  render() {
    const { maxQuantity, selectedQuantity, handleInput, increment, decrement } =
      this.props;

    return (
      <div className="QuantitySelector">
        <h2>수량</h2>
        <div className="quantitySelector">
          <input type="text" value={selectedQuantity} onChange={handleInput} />
          <button
            onClick={decrement}
            className={`btn decrement ${
              selectedQuantity === 1 && 'deactivate'
            }`}
          >
            -
          </button>
          <button
            onClick={increment}
            className={`btn increament ${
              selectedQuantity === maxQuantity && 'deactivate'
            }`}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default SelectQuantity;
