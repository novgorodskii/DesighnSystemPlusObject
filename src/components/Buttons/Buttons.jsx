import React from 'react';

import TitleUi from '../TitleUi';
import Phagraph from '../Typography/Phagraph';
import Frame from '../Frame';
import Button from './Button';
import ButtonIcon from './Button';
import Code from '../Code';

import './Buttons.sass';

const Buttons = () => {
  return(
    <div className="buttons">
      <TitleUi path="src/components/Typography/Buttons/Button.js" name="Button" />

      <Phagraph text="Button:" mode="body" />
      <Frame>
        <Button text="button" onClick={() => console.log("Button")} />
      </Frame>
      <Code text='<Button text="button" nClick={() => console.log("Button") />' />

      <Phagraph text="Button Left Icon:" mode="body" />
      <Frame>
        <ButtonIcon text="left icon" onClick={() => console.log("Button")} />
      </Frame>
      <Code text='<ButtonIcon text="left icon" nClick={() => console.log("Button") />' />

    </div>
  );
};

export default Buttons;