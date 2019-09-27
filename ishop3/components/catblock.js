import React from 'react';

import './catblock.css';

import ShopItems from './shopitems';
import ShopNameTitle from './shopname';

let CatBlock = React.createClass({

    displayName: 'CatBlock',
  
    getDefaultProps: function() {
      return {
          shopName: React.createElement('h1',{className:"catalog_title"},'Товаров нет!'),  //умолчательное значение Имени каталога
          emptyShopName: React.createElement('h1',{className:"catalog_title"},'Все товары были удалены!'),  //умолчательное значение Имени каталога если массив пуст
      }
    },

    propTypes: {
        shopName: React.PropTypes.object.isRequired,  //получаем Имя каталога в пропсах
        emptyShopName: React.PropTypes.object.isRequired, // получаем Имя каталога если все товары удалены
        items:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                itemImg: React.PropTypes.string.isRequired,
                itemName: React.PropTypes.string.isRequired,
                expert:React.PropTypes.string.isRequired,
                itemPrice:React.PropTypes.number.isRequired,
                itemStock:React.PropTypes.number.isRequired,
            })
        ),
    },

    getInitialState: function() {
      return {
        selectedItemCode: null,    //Код товара, на который был клик, по умолчанию null
        items: this.props.items,   //массив товаров
      };
    },


    clickItem: function(code) {
        // устанавливаем в стейте код товара, по которому был клик
        this.setState( {selectedItemCode:code} );

    },

    removeItemconfirm: function (code) {

      if (confirm('Удалить товар ?')) {
          // если в окне нажали ОК -
          //удаляем с помощью splice 1 строку в массиве в стейте по индексу. Индекс получаем сравнивая передаваемый код при клике и код в строке.
          this.state.items.splice(this.state.items.findIndex(i => i.code === code), 1);
          //устанавливаем в стейт полученный массив после удаления
          this.setState({items: this.state.items});
      }
      console.log(this.state.items);
    },


    render: function() {
      // в переменной массив товаров,
      // передаем в компонент ShopItems пропсы по каждому товару из массива
      let itemsCode=this.props.items.map( item =>
        React.createElement(ShopItems, {
            key:item.code,                                     //передаем в качестве пропса компоненту ShopItems значение key === коду товара
            code:item.code,
            itemImg:item.itemImg,
            itemName:item.itemName,
            expert:item.expert,
            itemPrice:item.itemPrice,
            itemStock:item.itemStock,

         cbItemClickSelected:this.clickItem,                        //callback при клике на товар
         cbRemoveitem:this.removeItemconfirm,                       //callback при клике на кноку удалить
         selectedItemCode:this.state.selectedItemCode,              //передаем в качестве пропса код выбранного товара в стейте
         items:this.state.items,                                   //передаем в качестве пропса массив товаров в стейте
         //changeColor:this.state.colored,                           //
        })
      );

      return React.DOM.div( {className:'CatBlock'},
          //рендерим div элемент с классом CatBlock
          // блок состоит из имени каталога, передаем имя в качестве пропса в компонент ShopNameTitle
          // и div блок с массивом товаров, массив из itemsCode
        React.createElement(ShopNameTitle, {shopName:this.props.shopName, emptyShopName:this.props.emptyShopName, items:this.state.items}),
        React.DOM.div( {className:'catItems'}, itemsCode ),
      );
    },
  
  });
export default CatBlock;