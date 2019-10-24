"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr = require('./MobileClients.json');

ReactDOM.render(
  <MobileCompany
    clients={clientsArr}
    workmode ={0}
  />
  , document.getElementById('container') 
);

