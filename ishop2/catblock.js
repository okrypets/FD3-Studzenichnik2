let CatBlock = React.createClass({

    displayName: 'CatBlock',
  
    getDefaultProps: function() {
      return {
          shop: React.createElement('h1',{},'Товаров нет'),
          itemsCode:[]
      }
    },

    propTypes: {
        shop: React.PropTypes.object.isRequired,
        items:React.PropTypes.array,
        itemName:React.PropTypes.string,
    },

    getInitialState: function() {
      return { 
        colored: '',
        selectedItemCode: null,
        items: this.props.items,
      };
    },


    clickItem: function(code) {

        console.log('выбран ответ с кодом '+code);
        this.setState( {selectedItemCode:code} );

    },





    removeItemconfirm: function (code) {

      if (confirm('Удалить товар ?')) {

          console.log('CatBlock: Подтвердили удаление ' + code);

          this.state.items.splice(this.state.items.findIndex(i => i.code === code), 1);
          this.setState({items: this.state.items});
          console.log(this.state.items);

      }
    },
    

    render: function() {

      let itemsCode=this.props.items.map( item =>
        React.createElement(ShopItems, {key:item.code,
            code:item.code,
            itemImg:item.itemImg,
            itemName:item.itemName,
            expert:item.expert,
            itemPrice:item.itemPrice,
            itemStock:item.itemStock,
         cbItemClickSelected:this.clickItem,
         cbRemoveitem:this.removeItemconfirm,
         selectedItemCode:this.state.selectedItemCode,
         items:this.state.items,
         changeColor:this.state.colored,
        })
      );

      return React.DOM.div( {className:'CatBlock'},
        React.createElement(ShopName, {shop:this.props.shop}),
        React.DOM.div( {className:'catItems'}, itemsCode ),
      );
    },
  
  });