import React from 'react';

import Phagraph from '../Typography/Phagraph';
import Code from '../Code';
import Frame from '../Frame';

const NewComponent = (props) => {
  const { textPhagraph, mpdePhagraph, textCode } = props;

  return (
    <React.Fragment>
      <Phagraph text={textPhagraph} mode={mpdePhagraph} />
      <Frame>
        {props.children}
      </Frame>
      <Code text={textCode} />
    </React.Fragment>
  );
};

export default NewComponent;