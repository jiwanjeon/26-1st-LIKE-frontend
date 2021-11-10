import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubMenuItem.scss';

export class SubMenuItem extends Component {
  render() {
    const { id, name, categoryId } = this.props;

    return (
      <li className="SubMenuItem">
        <Link to={`/products/${categoryId}/${id}`}>{name}</Link>
      </li>
    );
  }
}

export default SubMenuItem;
