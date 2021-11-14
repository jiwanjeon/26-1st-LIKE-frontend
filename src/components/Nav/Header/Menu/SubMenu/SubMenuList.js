import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';
import './SubMenuList.scss';

export class SubMenuList extends Component {
  render() {
    const { categoryId, subMenuList } = this.props;

    return (
      <div className="SubMenuList">
        <div className="subMenuInner">
          <ul className="subMenuItemWarp">
            {subMenuList.map(subMenu => (
              <SubMenuItem
                key={subMenu.id}
                categoryId={categoryId}
                name={subMenu.name}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenuList;
