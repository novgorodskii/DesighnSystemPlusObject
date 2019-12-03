import React from 'react';

import './Content.sass';
import data from "../../data";

const Content = () => {

  const getItems = (arr) => {
    return (
      arr.items.map(e => {
        return <h2>{e.name}</h2>
      })
    )
  };
  return (
    <div className="content">
      {
        data.map(item => {
          return {
            <h1>{item.name}</h1>
            // {getItems(item.arr)}
          }
        })}
    </div>
  );
};

export default Content;