import React from 'react';

import ContentItem from '../ContenItem';
import Typography from '../Typography';

import './Content.sass';

const Content = () => {
  return (
    <div className="content">
      <div className="name-project" >UI Kit +Object</div>
      <ContentItem component={Typography} name="Типографика" />
    </div>
  );
};

export default Content;