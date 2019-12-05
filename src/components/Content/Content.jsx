import React from 'react';

import ContentItem from '../ContenItem';
import Typography from '../Typography';
import Buttons from '../Buttons';

import './Content.sass';

const Content = () => {
  return (
    <div className="content">
      <div className="name-project" >UI Kit +Object</div>
      <ContentItem name="Типографика">
        <Typography />
      </ContentItem>
      <ContentItem name="Кнопки и ссылки">
        <Buttons />
      </ContentItem>
    </div>
  );
};

export default Content;