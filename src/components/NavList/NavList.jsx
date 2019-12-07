import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavList.sass';
import data from '../../data';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const NavListItem = ({name, arr}) => {
  return (
    <div className="nav-list-item">
      <div className="nav-list-item-title">{name}</div>
      {
        arr.map(item => {
          return (
            <AnchorLink href={`#${item.name}`} key={item.id}>
              <div className="nav-list-item-name">
                {item.name}
              </div>
            </AnchorLink>
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