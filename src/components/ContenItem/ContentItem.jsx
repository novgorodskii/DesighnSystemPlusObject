import React from 'react';

import Heading from '../Typography/Heading';

const ContentItem = ({name, component}) => {
  return (
    <React.Fragment>
      <Heading text={name} level={1} />
      {component}
    </React.Fragment>
  );
};

export default ContentItem;