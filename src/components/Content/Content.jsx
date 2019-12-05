import React from 'react';

import './Content.sass';
import data from "../../data";


const ContetnItem = ({title, arr}) => {
  const getItems = (arr) => {
    return (
      arr.map(e => {
        return <h2 key={e.id}>{e.name}</h2>
      })
    )
  };
  const items = getItems(arr)
  return (
    <React.Fragment>
      <h1>{title}</h1>
      {items}
    </React.Fragment>
  );
};

const Content = () => {
  return (
    <div className="content">
      {
        data.map(item => {
          return (
            <ContetnItem title={item.name} arr={item.items} key={item.id} />
          )
        })
      }
    </div>
  );
};

export default Content;