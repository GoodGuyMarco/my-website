/* @flow */
import React from 'react';
import Divider from './Divider';
import GitHub from './Icons/GitHub';
import Xing from './Icons/Xing';
import Icon from './Icons/Icon';
import Marker from './Icons/Marker';
import Envelope from './Icons/Envelope';
import Code from './Icons/Code';
import './Card.scss';

const Card = () => (
  <div className="Card">
    <h1 className="Card__title">Marco Bartelt</h1>
    <p className="Card__claim">Software Engineer</p>
    <Divider />
    <ul className="Card__list">
      <li>
        <Icon>
          <Envelope />
        </Icon>
        <a href="mailto:marco.bartelt94@gmail.com">marco.bartelt94@gmail.com</a>
      </li>
      <li>
        <Icon>
          <Code />
        </Icon>
        <a href="https://www.pro-volution.de"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Current employer"
        >
          pro.volution GmbH
        </a>
      </li>
      <li>
        <Icon>
          <Marker />
        </Icon>
        Düsseldorf
      </li>
    </ul>
    <div className="Card__footer">
      <a href="https://github.com/GoodGuyMarco"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="My GitHub profile"
      >
        <Icon>
          <GitHub />
        </Icon>
      </a>
      <a href="https://www.xing.com/profile/Marco_Bartelt2"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="My Xing profile"
      >
        <Icon>
          <Xing />
        </Icon>
      </a>
    </div>
  </div>
);

export default Card;
