import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubMenuItem.scss';

export class SubMenuItem extends Component {
  categoryName = categoryId => {
    if (categoryId === 1) return 'new';
    if (categoryId === 2) return 'shoes';
    if (categoryId === 3) return 'clothing';
    if (categoryId === 4) return 'sports';
    if (categoryId === 5) return 'supply';
    if (categoryId === 6) return 'brand';
  };

  render() {
    const { name, categoryId } = this.props;

    return (
      <li className="SubMenuItem">
        <Link to={`/products/${this.categoryName(categoryId)}`}>{name}</Link>
      </li>
    );
  }
}

export default SubMenuItem;
