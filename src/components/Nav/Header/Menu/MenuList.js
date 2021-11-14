import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './MenuList.scss';

export class MenuList extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="MenuList">
        <ul className="menuInner">
          {categories &&
            categories.map(category => {
              const { id, name, sub_categories } = category;
              return (
                <MenuItem
                  key={id}
                  name={name}
                  categoryId={id}
                  subMenuList={sub_categories}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default MenuList;
