import React from 'react';

import './Code.sass';

const Code = ({text}) => {
  return (
    <div className="code">
      <span>Code</span>
      <br />
      <code>{text}</code>
    </div>
  );
};

export default Code;