import React from 'react';

const Heading = ({level, text}) => {
  const renderSwitch = (number, text) => {
    switch(number) {
      case 1:
        return <h1>{text}</h1>;
      case 2:
        return <h2>{text}</h2>;
      case 3:
        return <h3>{text}</h3>;
      case 4:
        return <h4>{text}</h4>;
      default:
        return null;
    };
  };
  return <div>{renderSwitch(level,text)}</div>
};