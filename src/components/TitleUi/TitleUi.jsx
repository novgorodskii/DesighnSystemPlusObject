import React from 'react';
import './TitleUi.sass';

const TitleUi = ({name, path}) => {
  return (
    <div className="typography-title">
      <div>{name}</div>
      <p>{path}</p>
    </div>
  )
};

export default TitleUi;