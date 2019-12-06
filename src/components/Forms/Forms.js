import React from 'react';

import TitleUi from '../TitleUi';
import Code from '../Code';
import Frame from '../Frame';
import Phagraph from '../Typography/Phagraph';
import Input from './Input';

const Forms = () => {
  return (
    <div className="forms">
      <TitleUi path="src/components/Typography/Buttons/Button.js" name="Form"/>

      <Phagraph text="Default input:" mode="body" />
      <Frame>
        <Input placeholder="Placeholder" />
      </Frame>
      <Code text='<Input placeholder="Placeholder" />' />

      <Phagraph text="Default input icon left:" mode="body" />
      <Frame>
        <Input placeholder="Placeholder" type="icon" />
      </Frame>
      <Code text='<Input placeholder="Placeholder" type="icon" />' />

      <Phagraph text="Default password:" mode="body" />
      <Frame>
        <Input placeholder="Placeholder" type="password" />
      </Frame>
      <Code text='<Input placeholder="Placeholder" type="password" />' />
    </div>
  );
};

export default Forms;