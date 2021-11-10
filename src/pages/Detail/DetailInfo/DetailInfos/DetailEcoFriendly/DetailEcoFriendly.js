import React, { Component } from 'react';
import './DetailEcoFriendly.scss';

export class DetailEcoFriendly extends Component {
  render() {
    const { ecoFriendly } = this.props;
    return (
      <div className="DetailEcoFriendly">{ecoFriendly && '친환경 소재'}</div>
    );
  }
}

export default DetailEcoFriendly;
