import React from 'react';

import TitleUi from '../TitleUi';
import Phagraph from '../Typography/Phagraph';
import Frame from '../Frame';
import Button from './Button';
import Code from '../Code';


import Check from '@material-ui/icons/Check';
import NearMeIcon from '@material-ui/icons/NearMe';

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
        <Button
          mode="left-icon"
          text="left icon"
          onClick={() => console.log("Button Icon")}>
          <Check />
        </Button>
      </Frame>
      <Code text='<Button text="left icon" onClick={() => console.log("Button Icon")}><AccessAlarmIcon /></Button>' />

      <Phagraph text="Button small:" mode="body" />
      <Frame>
        <Button
          mode="small"
          text="small default"
          onClick={() => console.log("Button Icon")} />
      </Frame>
      <Code text='<Button mode="small"
        text="small default" onClick={() => console.log("Button")}><AccessAlarmIcon /></Button>' />

      <Phagraph text="Button Icon:" mode="body" />
      <Frame>
        <Button
          mode="icon"
          onClick={() => console.log("Button Icon")}>
          <NearMeIcon />
        </Button>
      </Frame>
      <Code text='<Button onClick={() => console.log("Button Icon")}><NearMeIcon /></Button>' />

      <Phagraph text="Button loading:" mode="body" />
      <Frame>
        <Button
          mode="loader"
          loader
          onClick={() => console.log("Button Loading")}/>
      </Frame>
      <Code text='<Button onClick={() => console.log("Button Icon")}><NearMeIcon /></Button>' />
    </div>
  );
};

export default Buttons;