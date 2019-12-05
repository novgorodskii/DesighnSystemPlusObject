import React from 'react';

import './ButtonIcon.sass';

const ButtonIcon = ({text,onClick}) => {
  return(
    <div className="button" onClick={() => onClick()}>
      {text}
    </div>
  )
};

export default ButtonIcon;