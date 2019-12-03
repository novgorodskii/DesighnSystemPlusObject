import React from 'react';

import './NavList.sass';
import data from '../../data';

const NavListItem = ({name, arr}) => {
  return (
    <div className="nav-list-item">
      <div className="nav-list-title">{name}</div>
      {
        arr.map(item => {
          return (
            <div key={item.id} className="nav-list-item-name">
              {item.name}
            </div>
          )
        })
      }
    </div>
  );
};

const NavList = () => {
  const list = data.map(item => {
    return <NavListItem key={item.id}  name={item.name} arr={item.items}/>
  });
  return (
    <div className="nav-list">
      {list}
    </div>
  );
};

export default NavList;