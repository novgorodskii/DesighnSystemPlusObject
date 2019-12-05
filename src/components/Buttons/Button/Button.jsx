import React from 'react';

import './Button.sass';
import CircularProgress from '@material-ui/core/CircularProgress';

const Button = (props) => {

  const propsCase = () => {
    switch (props.mode) {
      case "small":
        return <div className="button button-small" onClick={() => props.onClick()}>{props.text}</div>;

      case "left-icon":
      return <div className="button" onClick={() => props.onClick()}>
        <div className="button-left-icon"> {props.children} </div>
        {props.text}</div>;

      case "icon":
      return <div className="button button-icon" onClick={() => props.onClick()}>
        <div> {props.children} </div>
        {props.text}</div>;

      case "loader":
        return <div className="button button-small">
          <CircularProgress color="inherit" size={24} />
        </div>;

      default:
        return <div className="button " onClick={() => props.onClick()}>{props.text}</div>;
    };
  }

  return (propsCase())
};

export default Button;