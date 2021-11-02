import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './MenuList.scss';

export class MenuList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="menu">
        <ul className="menuList">
          {categories.map(category => (
            <MenuItem
              key={category.id}
              name={category.name}
              list={category.list}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuList;
