import React from 'react';

import './Frame.sass';

const Frame = (props) => {
  return (
    <div className="frame">
      {props.children}
    </div>
  );
};

export default Frame;