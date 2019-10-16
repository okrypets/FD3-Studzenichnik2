"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowBlock from './components/RainbowBlock';

let Hello = 'Hello!';

ReactDOM.render(
  <RainbowBlock
      helloText = {Hello}
  />
  , document.getElementById('container') 
);

