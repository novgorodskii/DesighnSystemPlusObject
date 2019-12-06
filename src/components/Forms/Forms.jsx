import React, {useState} from 'react';

import TitleUi from '../TitleUi';
import Input from './Input';
import Select from './Select';
import MultiSelect from './MultiSelect';
import NewComponent from '../NewComponent';

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
  let newId = 0;
  const [activeItemSelect, setSelect] = useState(dataSelect[0]);
  const [activeItemSelectIcon, setSelectIcon] = useState(dataSelect[0]);
  const [activesMultiSelect, setMultiSelect] = useState([]);

  const addTag = (id) => {
    const index = activesMultiSelect.findIndex(tag => tag.id === id);
    console.log(id)
    if ( index === -1) {
      console.log(id)
      setMultiSelect([...activesMultiSelect, dataSelect[id]]);
    };
  };

  const deleteTag = (id) => {
    const index = activesMultiSelect.findIndex(todo => todo.id === id);
    setMultiSelect([...activesMultiSelect.slice(0, index),...activesMultiSelect.slice(index + 1)]);
};

  return (
    <div className="forms">
      <TitleUi path="src/components/Forms/Input/Input.js" name="Input"/>

      <NewComponent
        textPhagraph="Default input:"
        mpdePhagraph="body"
        textCode='<Input placeholder="Placeholder" />'>
        <Input placeholder="Placeholder" />
      </NewComponent>

      <NewComponent
        textPhagraph="Default input icon left:"
        mpdePhagraph="body"
        textCode='<Input placeholder="Placeholder" type="icon" />'>
        <Input placeholder="Placeholder" type="icon" />
      </NewComponent>

      <NewComponent
        textPhagraph="Default password:"
        mpdePhagraph="body"
        textCode='<Input placeholder="Placeholder" type="password" />'>
        <Input placeholder="Placeholder" type="password" />
      </NewComponent>

      <TitleUi path="src/components/Forms/Select/Select.js" name="Dropdown"/>

      <NewComponent
        id={newId++}
        textPhagraph="Default Dropdown:"
        mpdePhagraph="body"
        textCode='<Select onClick={(id) => setSelect(dataSelect[id])} itemsList={dataSelect} activeItem={activeItemSelect} />'>
        <Select onClick={(id) => setSelect(dataSelect[id])} itemsList={dataSelect} activeItem={activeItemSelect} />
      </NewComponent>

      <NewComponent
        id={newId++}
        textPhagraph="Icon Left Dropdown:"
        mpdePhagraph="body"
        textCode='<Select
        iconLeft
        onClick={(id) => setSelectIcon(dataSelect[id])}
        itemsList={dataSelect}
        activeItem={activeItemSelectIcon} />'>
        <Select
          iconLeft
          onClick={(id) => setSelectIcon(dataSelect[id])}
          itemsList={dataSelect}
          activeItem={activeItemSelectIcon} />
      </NewComponent>

      <NewComponent
        id={newId++}
        textPhagraph="Multi Select:"
        mpdePhagraph="body"
        textCode='<MultiSelect
        onClick={(id) => addTag(id)}
        itemsList={dataSelect}
        activeItem={activesMultiSelect}/>'>
        <MultiSelect
          deleteTag={deleteTag}
          addTag={addTag}
          itemsList={dataSelect}
          activeItem={activesMultiSelect} />
      </NewComponent>
    </div>
  );
};

export default Forms;