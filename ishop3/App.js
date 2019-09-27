"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import CatBlock from './components/CatBlock';

let shopNameText = React.createElement('h1',{className:"catalog_title"},'Каталог товаров');
let emptyShopNameText = React.createElement('h1',{className:"catalog_title"},'Oops!');
import itemArr from './itemArr.json';
ReactDOM.render(
    //передаем в качестве пропса компоненту CatBlock Имя каталога и массив товаров
    //рендерим все внутри div блока container
    React.createElement(CatBlock,{shopName:shopNameText, items:itemArr, emptyShopName: emptyShopNameText}),
    document.getElementById('container')
);