import React from 'react';

import './Frame.sass';

const Frame = (props) => {
  return (
    <div className="frame shadow-box">
      {props.children}
    </div>
  );
};

export default Frame;