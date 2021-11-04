import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';
import './SubMenuList.scss';

export class SubMenuList extends Component {
  render() {
    const { menuName, subMenulist } = this.props;

    return (
      <div className="SubMenuList">
        <div className="subMenuInner">
          <ul className="subMenuItemWarp">
            {subMenulist.map(submenu => (
              <SubMenuItem
                key={submenu.id}
                id={submenu.id}
                name={submenu.name}
                menuName={menuName}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenuList;
