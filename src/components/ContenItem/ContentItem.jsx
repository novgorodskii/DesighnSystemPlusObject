import React from 'react';

import Heading from '../Typography/Heading';

const ContentItem = (props) => {
  return (
    <React.Fragment>
      <Heading text={props.name} level={1} />
      {props.children}
    </React.Fragment>
  );
};

export default ContentItem;