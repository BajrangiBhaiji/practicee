import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Uomponent = (props) => (
  <div className="footer">
    <Text field={props.fields.copyright} />
    <Image className="image" field={props.fields.image} />
  </div>
);

export default Uomponent;
