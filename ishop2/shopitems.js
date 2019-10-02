let ShopItems = React.createClass({

    displayName: 'ShopItems',

    propTypes: {
        itemStock: React.PropTypes.number.isRequired,
        itemPrice: React.PropTypes.number.isRequired,
        expert: React.PropTypes.string,
        itemName: React.PropTypes.string.isRequired,
        itemImg: React.PropTypes.string.isRequired,
        code: React.PropTypes.number,
        cbItemClickChangetoogle: React.PropTypes.func,
        cbRemoveitem: React.PropTypes.func,
        changeColor: React.PropTypes.string.isRequired,
        items:React.PropTypes.array,
        selectedItemCode: React.PropTypes.number,
    },

    deleteItem: function(EO) {
        console.log('Shopitems: отправлен запрос на удаление товара  - '+EO.target.value + '' + this.props.itemName);
        this.props.cbRemoveitem(this.props.code);
      },

    clickItem: function(EO) {
        console.log('Shopitems: Клик по товару с кодом:'+ EO.target.value + ' ' + this.props.itemName);
        this.props.cbItemClickSelected(this.props.code);

    },
    

    render: function() {
        return React.DOM.div({className:'CatBlockShopItems' + ' ' +  ((this.props.selectedItemCode===this.props.code) ? 'colored' : '') },
        React.DOM.label({className:'labelItem'},
            React.DOM.input({type:'radio',value:this.props.code,name:'radiobutton',
            checked:(this.props.selectedItemCode===this.props.code),
            onClick:this.clickItem,
            }),
            React.DOM.div({className:'labelItemBlock'},
                React.createElement('img', {src: 'images/'+ this.props.itemImg, className: 'itemImg', alt:""}),
                React.DOM.div({className:'itemInfo'},
                    React.createElement('h2', {className:'itemName'},this.props.itemName),
                    React.DOM.div({className:'itemExpert'},this.props.expert),
                    ),
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
                React.DOM.div({className:'buttonBlock'},
                    React.DOM.input( {type:'button',value:'Удалить товар', onClick:this.deleteItem} ),
                    ),
            )
        ),

        );
    },

});