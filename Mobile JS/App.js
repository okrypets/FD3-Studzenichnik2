"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName="Velcom";
let clientsArr = require('./MobileClients.json');

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
    workmode ={0}
  />
  , document.getElementById('container') 
);

