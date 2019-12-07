import React from 'react';

import Frame from '../Frame';
import Heading from './Heading';
import Phagraph from './Phagraph';
import Code from '../Code';
import TitleUi from '../TitleUi';
import "./Typography.sass";

const Typography = () => {
  return(
    <div className="typography">

      <div id="Heading"></div>
      <TitleUi path="src/components/Typography/Heading/Heading.js" name="Heading" />

      <Phagraph text="Heading level 1:" mode="body" />
      <Frame>
        <Heading text="+Object is a Company that works with glass." level={1} />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={1} />' />

      <Phagraph text="Heading level 2:" mode="body" />
      <Frame>
        <Heading text="+Object is a Company that works with glass." level={2} />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={2} />' />

      <Phagraph text="Heading level 3:" mode="body" />
      <Frame>
        <Heading text="+Object is a Company that works with glass." level={3} />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={3} />' />

      <Phagraph text="Heading level 4:" mode="body" />
      <Frame>
        <Heading text="+Object is a Company that works with glass." level={4} />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={4} />' />

      <div id="Phagraph"></div>
      <TitleUi path="src/components/Typography/Phagraph/Phagraph.js" name="Phagraph" />

      <Phagraph text="Body:" mode="body" />
      <Frame>
        <Phagraph text="+Object is a Company that works with glass." mode="body" />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={1} />' />

      <Phagraph text="bodyMedium:" mode="body" />
      <Frame>
        <Phagraph text="+Object is a Company that works with glass." mode="bodyMedium" />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={1} />' />

      <Phagraph text="bodySmall:" mode="body" />
      <Frame>
        <Phagraph text="+Object is a Company that works with glass." mode="bodySmall" />
      </Frame>
      <Code text='<Heading text="+Object is a Company that works with glass." level={1} />' />
    </div>
  );
};

export default Typography;