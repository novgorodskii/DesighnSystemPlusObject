import React from 'react';

import Heading from '../Typography/Heading';

const ContentItem = (props) => {
  return (
    <div id={props.id}>
      <Heading text={props.name} level={1} />
      {props.children}
    </div>
  );
};

export default ContentItem;