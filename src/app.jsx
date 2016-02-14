import React from 'react';
import { render } from 'react-dom';
import 'aframe';
import { Space } from './space';
import { Star } from './star';
import { Cockpit } from './cockpit';

const aframeStars = [];

for(let x=0;x<750;++x) {
  aframeStars.push(
    <Star key={x} />
  );
}

window.addEventListener(`DOMContentLoaded`, ()=> {
  render(
    <Space>
      {aframeStars}
      <Cockpit />
    </Space>,
    document.querySelector(`main`)
  );
}, false);
