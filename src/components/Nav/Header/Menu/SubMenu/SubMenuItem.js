import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubMenuItem.scss';

// function idValueCheck(id) {
//   if (id === 100) id = 'shoes';
//   else if (id === 200) id = 'clothing';
//   else if (id === 300) id = 'supply';
//   else if (id === 400) id = 'sports';
// }

export class SubMenuItem extends Component {
  render() {
    const { id, name, categoryId } = this.props;

    return (
      <li className="SubMenuItem">
        <Link to={`/products/${categoryId}`}>{name}</Link>
      </li>
    );
  }
}

export default SubMenuItem;
