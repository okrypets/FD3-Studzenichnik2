let ShopName = React.createClass({

    displayName: 'ShopName',

    getDefaultProps: function() {
     return {
        shop: React.createElement('h1',{className:"catalog_title"},'Товаров нет'),
        }
     },

    propTypes: {
        shop: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.DOM.div( {className:'ShopName'}, this.props.shop );
    },

});