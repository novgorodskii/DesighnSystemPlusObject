import React from 'react';

import LinkIcon from '@material-ui/icons/Link';
import './Link.sass';

const Link = (props) => {

  const caseProps = () => {
    switch (props.mode) {
      case "bold":
      return <a href="/" className="link bold">{props.children}</a>

      case "external":
      return <a href="/" className="link">{props.children} <LinkIcon/></a>

      default:
        return <a href="/" className="link">{props.children}</a>
    }
  };
  return caseProps()
};

export default Link;