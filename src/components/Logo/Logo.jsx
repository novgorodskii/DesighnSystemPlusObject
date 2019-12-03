import React from "react";

import logoImg from "./object-logo.svg";
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo" />
    </div>
  );
};
export default Logo;
