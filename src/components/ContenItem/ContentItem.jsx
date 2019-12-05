import React from 'react';

import TitleUi from '../TitleUi';

const ContentItem = ({name, component}) => {
  return (
    <React.Fragment>
      <TitleUi name={name} />
      {component}
    </React.Fragment>
  );
};

export default ContentItem;