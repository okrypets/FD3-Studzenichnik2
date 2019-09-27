import React from 'react';
import './shopitems.css';

let ShopItems = React.createClass({

    displayName: 'ShopItems',

    propTypes: {
        itemStock: React.PropTypes.number.isRequired, // получаем количество остатка
        itemPrice: React.PropTypes.number.isRequired, // получаем цену
        expert: React.PropTypes.string,               // получаем описание товара
        itemName: React.PropTypes.string.isRequired,  // получаем Имя товара
        itemImg: React.PropTypes.string.isRequired,   // получаем название файла картинки товара
        code: React.PropTypes.number.isRequired,                 // получаем код товара
        cbItemClickSelected: React.PropTypes.func, //callback функция при клике на товар
        cbRemoveitem: React.PropTypes.func,           //callback функция при клике на кнопку удалить
        selectedItemCode: React.PropTypes.number,     //получаем Код товара, на который был клик
    },

    deleteItem: function() {
        //передаем через callback код товара, в котором нажали кнопку удалить
        this.props.cbRemoveitem(this.props.code);
      },

    clickItem: function() {
        //передаем через callback код товара, по которому кликнули
        this.props.cbItemClickSelected(this.props.code);
    },
    

    render: function() {
        //рендерим содержимое одного товара
        return React.DOM.div({className:'CatBlockShopItems' + ' ' +  ((this.props.selectedItemCode===this.props.code) ? 'colored' : '') },
            //строим div блок, в data атрибут передаем код товара и событие onclick
            // при клике вызываем функцию clickItem, передаем код из data attributes
                React.DOM.div({className:'Item', data: this.props.code, onClick:this.clickItem },
                    React.createElement('img', {src: './components/images/'+ this.props.itemImg, className: 'itemImg', alt:""}),
                    React.DOM.div({className:'itemInfo'},
                        React.createElement('h2', {className:'itemName'},this.props.itemName),
                        React.DOM.div({className:'itemExpert'},this.props.expert),
                        ),
                    React.DOM.div({className:'priceBlock'},
                        React.DOM.div({className:'itemPrice'},
                            React.DOM.span({className:'Price'},this.props.itemPrice),
                            "р.",
                            //React.DOM.input({type:'button', value:'Купить'}),
                        ),
                        React.DOM.div({className:'itemStock'},
                            "На складе:",
                            React.DOM.span({className:'Stock'},this.props.itemStock),
                            "/шт.",
                        ),
                    ),
                    React.DOM.div({className:'buttonBlock'},
                        //при клике вызываем функцию deleteItem, передаем код блока из data
                        React.DOM.input( {type:'button',value:'Удалить товар', onClick:this.deleteItem} ),
                    ),
        ),

        );
    },

});
export default ShopItems;