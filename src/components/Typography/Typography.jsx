import React from 'react';

import Heading from './Heading';
import Phagraph from './Phagraph';
import Code from '../Code';

import "./Typography.sass";


const Typography = () => {
  return(
    <div className="typography">
      <div className="typography-title">
        <div>Heading</div>
        <p>src/components/typography/Heading/Heading.js</p>
      </div>

      <Phagraph text="Heading level 1:" mode="body" />
      <Heading text="+Object is a Company that works with glass." level={1} />
      <Code text='<Heading text="+Object is a Company that works with glass." level={1} />' />

      <Phagraph text="Heading level 2:" mode="body" />
      <Heading text="+Object is a Company that works with glass." level={2} />
      <Code text='<Heading text="+Object is a Company that works with glass." level={2} />' />

      <Phagraph text="Heading level 3:" mode="body" />
      <Heading text="+Object is a Company that works with glass." level={3} />
      <Code text='<Heading text="+Object is a Company that works with glass." level={3} />' />

      <Phagraph text="Heading level 4:" mode="body" />
      <Heading text="+Object is a Company that works with glass." level={4} />
      <Code text='<Heading text="+Object is a Company that works with glass." level={4} />' />

    </div>
  );
};

export default Typography;