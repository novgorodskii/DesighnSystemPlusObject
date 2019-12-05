import React from 'react';

import Heading from './Heading';
import Code from '../Code';

import "./Typography.sass";


const Typography = () => {
  return(
    <div className="typography">
      <div className="typography-title">
        <div>Heading</div>
        <p>src/components/typography/Heading/Heading.js</p>
      </div>
      <div>
        <Heading text="+Object is a Company that works with glass." level={1} />
      </div>
      <Code text='<Heading text="+Object is a Company that works with glass." level={4} />' />
    </div>
  );
};

export default Typography;