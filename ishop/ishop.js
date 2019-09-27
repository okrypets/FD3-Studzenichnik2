let CatBlock = React.createClass({

    displayName: 'CatBlock',
  
    getDefaultProps: function() {
      return {
          catName: React.createElement('h1',{},'Товаров нет'),
          itemsCode:[]
      }
    },

    propTypes: {
        catName: React.PropTypes.object.isRequired,
        itemsCode:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                itemImg: React.PropTypes.object.isRequired,
                itemName: React.PropTypes.object.isRequired,
                expert: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                stock: React.PropTypes.number.isRequired
            })
        )
    },
  
    render: function() {
      //let itemsCode=[];
      let itemsCode=this.props.items.map(item => 
        
        React.DOM.div({key:item.code,className:'catItem'},
          React.createElement('img', {src: 'images/'+ item.itemImg, className: 'itemImg', alt:""}),
          React.createElement('h2', {className:'itemName'},item.itemName),
          React.DOM.div({className:'itemExpert'},item.expert),
          React.DOM.div({className:'itemPrice'},
              React.DOM.span({className:'Price'},item.price),
              "р.",
              React.createElement('button', {},'Купить'),
              ),
          React.DOM.div({className:'itemStock'},
              "На складе:",
              React.DOM.span({className:'Stock'},item.stock),
              "/шт.",
          ),
        )        
      ); 
     
      return React.DOM.div( {className:'CatBlock'}, 
        React.DOM.div( {className:'catalog_title'}, this.props.catName ),
        React.DOM.div( {className:'catItems'}, itemsCode ),
      );
    },
  
  });