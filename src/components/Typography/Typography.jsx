import React from 'react';
import Heading from './Heading';

import "./Typography.sass";

const Typography = () => {
  return(
    <div className="typography">
      <div className="typography-title">
        <div>Heading</div>
        <p>src/components/typography/Heading/Heading.js</p>
      </div>
      <div>
        <Heading text="Heading level-1" level={1} />
        <Heading text="Heading level-2" level={2} />
        <Heading text="Heading level-3" level={3} />
        <Heading text="Heading level-4" level={4} />
      </div>
    </div>
  );
};

export default Typography;