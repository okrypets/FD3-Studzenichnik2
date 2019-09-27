let FilterBlock = React.createClass({

    displayName: 'FilterBlock',
  
    getDefaultProps: function() {
      return {
          filterName: React.createElement('h1',{},'Фильтровать нечего'),

      }
    },

    propTypes: {
        items: React.PropTypes.array.isRequired,
        buttonvalue: React.PropTypes.string.isRequired,
        isCheckedCheckbox: React.PropTypes.bool,
        filtertextvalue: React.PropTypes.string,
    },

    getInitialState: function() {
        return {
            filtertextvalue: '',
            items: this.props.items,
            isCheckedCheckbox: false,
            reset: false,
        }
    },

    rebuildListItems: function() {

        let items=this.props.items;
        let keys = Object.keys(items[0]);
        if ( this.state.filtertextvalue) //string - text true
            items = items.filter(o => keys.some(k => o[k].toString().toLowerCase().indexOf(this.state.filtertextvalue) !== -1));
        else items = this.props.items.slice();
        if ( this.state.isCheckedCheckbox === true)
            items.sort((a,b) => {
                if (a.item < b.item) return -1;
                if (a.item > b.item) return 1;
                return 0;
            });
        this.setState( {items: items});
      },


    voteFilterText: function(EO) {
        console.log('FilterBlock: текст в поле фильтра изменен - ' + EO.target.value);
        this.setState({filtertextvalue: EO.target.value}, this.rebuildListItems);
    },

    sort: function(EO) {
        console.log('FilterBlock: isCheckedCheckbox is ' +this.state.isCheckedCheckbox);
        this.setState({isCheckedCheckbox: EO.target.checked}, this.rebuildListItems);
    },

    reset: function() {
        this.setState({
            isCheckedCheckbox: false,
            filtertextvalue: '',
        }, this.rebuildListItems);


    },

    render: function() {

    let listItems = this.state.items.map(i =>
        React.createElement('option',{key:i.code,value:i.item}, i.item)
    );



    return React.DOM.div( {className:'FilterBlock'},
        React.DOM.div( {className:'filter_title'}, this.props.filterName ),
        React.DOM.input({type:'checkbox', onClick: this.sort, checked: this.state.isCheckedCheckbox}),
        React.DOM.input({type:'text', name: 'filterText', onChange: this.voteFilterText, value: this.state.filtertextvalue}),
        React.DOM.input({type:'button', value: this.props.buttonvalue , name: 'resetFilter', onClick: this.reset}),
        React.DOM.label({className:'filter_list'},
            React.DOM.select({multiple:true, className:'listItem'}, listItems),
        ),
    );
    },
  
  });