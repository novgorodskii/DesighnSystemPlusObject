import React from "react";

import Logo from '../Logo';
import NavList from '../NavList';
import "./Nav.sass";

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <NavList />
    </div>
  );
};
export default Nav;
