import React from 'react';

import ContentItem from '../ContenItem';
import Typography from '../Typography';
import Buttons from '../Buttons';
import Forms from '../Forms';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Content.sass';

const Content = () => {
  return (
    <div className="content">
      <div className="name-project" >UI Kit +Object</div>

      <AnchorLink href="#disnvs">
        ddaddwqqd
      </AnchorLink>
      <ContentItem name="Типографика">
        <Typography />
      </ContentItem>
      <ContentItem name="Кнопки и ссылки">
        <Buttons />
      </ContentItem>

      <ContentItem name="Формы">
        <Forms />
      </ContentItem>

      <div id="disnvs">adas</div>
    </div>
  );
};

export default Content;