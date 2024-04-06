import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Hercomp = (props) => (
  <div>
    <p>Hercomp Component</p>
    <Image media={props.fields.Image} />
  </div>
);

export default Hercomp;
