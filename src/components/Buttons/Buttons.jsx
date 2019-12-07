import React from 'react';

import TitleUi from '../TitleUi';
import Phagraph from '../Typography/Phagraph';
import Frame from '../Frame';
import Button from './Button';
import Link from './Link';
import Code from '../Code';
import NewComponent from '../NewComponent';

import Check from '@material-ui/icons/Check';
import NearMeIcon from '@material-ui/icons/NearMe';

import './Buttons.sass';

const Buttons = () => {
  return(
    <div className="buttons">
      <div id="Button"></div>
      <TitleUi path="src/components/Buttons/Button/Button.js" name="Button" />

      <NewComponent
        textPhagraph="Button:"
        mpdePhagraph="body"
        textCode='<Button text="button" onClick={() => console.log("Button")} />'>
      </NewComponent>

      <NewComponent
        textPhagraph="Button Left Icon:"
        mpdePhagraph="body"
        textCode='<Button
        mode="left-icon"
        text="left icon"
        onClick={() => console.log("Button Icon")}>
        <Check />
      </Button>'>
          <Button
          mode="left-icon"
          text="left icon"
          onClick={() => console.log("Button Icon")}>
          <Check />
        </Button>
      </NewComponent>

      <NewComponent
        textPhagraph="Button small:"
        mpdePhagraph="body"
        textCode='<Button
        mode="small"
        text="small default"
        onClick={() => console.log("Button Icon")} />'>
          <Button
            mode="small"
            text="small default"
            onClick={() => console.log("Button Icon")} />
      </NewComponent>

      <NewComponent
        textPhagraph="Button Icon:"
        mpdePhagraph="body"
        textCode='<Button
        mode="icon"
        onClick={() => console.log("Button Icon")}>
        <NearMeIcon />
      </Button>'>
        <Button
          mode="icon"
          onClick={() => console.log("Button Icon")}>
          <NearMeIcon />
        </Button>
      </NewComponent>

      <NewComponent
        textPhagraph="Button Loading:"
        mpdePhagraph="body"
        textCode='<Button mode="loader" loader
        onClick={() => console.log("Button Loading")}/>'>
        <Button
          mode="loader"
          loader
          onClick={() => console.log("Button Loading")}/>
      </NewComponent>

      <div id="Link"></div>
      <TitleUi path="src/components/Buttons/Link/Link.js" name="Link" />

      <Phagraph text="Simple link:" mode="body" />
      <Frame>
        <Link><span>Ссылка</span></Link>
      </Frame>
      <Code text='<Link onClick={() => console.log("Button Icon")}><NearMeIcon /></Button>' />

      <Phagraph text="Bold link:" mode="body" />
      <Frame>
        <Link mode="bold"><span>Ссылка</span></Link>
      </Frame>
      <Code text='<Link onClick={() => console.log("Button Icon")}><NearMeIcon /></Button>' />

      <Phagraph text="Link external:" mode="body" />
      <Frame>
        <Link mode="external"><span>Ссылка</span></Link>
      </Frame>
      <Code text='<Link onClick={() => console.log("Button Icon")}><NearMeIcon /></Button>' />
    </div>
  );
};

export default Buttons;