import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';
import './SubMenuList.scss';

export class SubMenuList extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="SubMenuList">
        <div className="subMenuInner">
          <ul className="subMenuItemWarp">
            {list.map((item, index) => (
              <SubMenuItem key={index + 1} name={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenuList;
