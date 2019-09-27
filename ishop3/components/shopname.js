import React from 'react';
import './shopname.css';

let ShopNameTitle = React.createClass({

    displayName: 'ShopNameTitle',

    propTypes: {
        shopName: React.PropTypes.object.isRequired,  //получаем Имя каталога в пропсах
        emptyShopName: React.PropTypes.object.isRequired, // получаем Имя каталога если все товары удалены
        items:React.PropTypes.array,                  // если массив пустой - emptyShopName
    },

    render: function() {
        return React.DOM.div( {className:'ShopName'}, ((this.props.items.length === 0) ? this.props.emptyShopName : this.props.shopName ) );
    },

});
export default ShopNameTitle;