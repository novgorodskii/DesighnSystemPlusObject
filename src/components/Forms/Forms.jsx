import React, {useState} from 'react';

import TitleUi from '../TitleUi';
import Code from '../Code';
import Frame from '../Frame';
import Phagraph from '../Typography/Phagraph';
import Input from './Input';
import Select from './Select';


const dataSelect = [
  {
    name: "Ice Cream",
    id: 0,
  },
  {
    name: "Tea",
    id: 1
  },
  {
    name: "Milk",
    id: 2
  },
  {
    name: "Coffee",
    id: 3
  },
  {
    name: "Water",
    id: 4
  }
];

const Forms = () => {

  const [activeItemSelect, setSelect] = useState(dataSelect[0]);
  const [activeItemSelectIcon, setSelectIcon] = useState(dataSelect[0]);

  return (
    <div className="forms">
      <TitleUi path="src/components/Forms/Input/Input.js" name="Input"/>

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


      <TitleUi path="src/components/Forms/Select/Select.js" name="Dropdown"/>

      <Phagraph text="Default Dropdown:" mode="body" />
      <Frame>
        <Select onClick={(id) => setSelect(dataSelect[id])} itemsList={dataSelect} activeItem={activeItemSelect} />
      </Frame>
      <Code text='<Input placeholder="Placeholder" />' />

      <Phagraph text="Icon Left Dropdown:" mode="body" />
      <Frame>
        <Select
          iconLeft
          onClick={(id) => setSelectIcon(dataSelect[id])}
          itemsList={dataSelect}
          activeItem={activeItemSelectIcon} />
      </Frame>
      <Code text='<Input placeholder="Placeholder" />' />
    </div>
  );
};

export default Forms;