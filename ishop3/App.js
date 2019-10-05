"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import CatBlock from './components/catblock.js';

let shopNameText = 'Shop';
let emptyShopNameText = 'Oops! No products yet.';
let singleItemTitleAddNewText = 'Add New Product';
let singleItemTitleEditText = 'Edit';
let itemArr = require('./itemArr.json');
//let itemArr = [];

//Validation

let WarrValidStringText = 'Please, fill the field. Value must be a string!';
let WarrValidNumberText = 'Please, fill the field. Value must be a rational number, greater than 0!';
let WarrValidURLText = 'Please, fill the field. Value must be an valid URL!';
let WarrValidIntegerText = 'Please, fill the field. Value must be a positive Integer!';




ReactDOM.render(
    <CatBlock
        shopName ={shopNameText}
        items = {itemArr}
        emptyShopName = {emptyShopNameText}
        startWorkmode ={0}
        singleItemTitleEdit = {singleItemTitleEditText}
        singleItemTitleAddNew = {singleItemTitleAddNewText}
        WarrValidString = {WarrValidStringText}
        WarrValidNumber = {WarrValidNumberText}
        WarrValidURL = {WarrValidURLText}
        WarrValidInteger = {WarrValidIntegerText}
    />
    , document.getElementById('container')
);