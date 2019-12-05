import React from 'react';

import './Phagraph.sass';

const Phagraph = ({mode,text}) => {

  const renderSwitch = (mode, text) => {
    switch(mode) {
      case "body":
        return <p className="body">{text}</p>;
      case "bodyMedium":
        return <p className="bodyMedium">{text}</p>;
      case "bodySmall":
        return <p className="bodySmall">{text}</p>;
      default:
        return null;
    };
  };

  return <div>{renderSwitch(mode,text)}</div>
};

export default Phagraph;