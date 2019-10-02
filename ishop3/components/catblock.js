import React from 'react';
import PropTypes from 'prop-types';

import './catblock.css';

import ShopItems from './shopitems.js';
import ShopNameTitle from './shopname.js';
import SingleItem from './singleitem.js';

class CatBlock extends React.Component {

    //displayName: 'Catblock',

    static defaultProps = {
       shopName: 'Это интернет-магазин"!',
       emptyShopName: 'Все товары были удалены!',
    };

    static propTypes = {
        shopName: PropTypes.string.isRequired,
        singleItemTitleEdit: PropTypes.string,
        singleItemTitleAddNew: PropTypes.string,
        emptyShopName: PropTypes.string.isRequired,
        items:PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                itemImg: PropTypes.string.isRequired,
                itemName: PropTypes.string.isRequired,
                expert:PropTypes.string.isRequired,
                itemPrice:PropTypes.number.isRequired,
                itemStock:PropTypes.number.isRequired,
            })
        ),
        /*validateItemNameValue: PropTypes.boolean*/
        startWorkmode: PropTypes.number,   /* 1 - карточка товара, 2 - Редактирование, 3 - Добавление нового товара*/

        //isSingleItemAnyChange: PropTypes.boolen,


        WarrValidString: PropTypes.string.isRequired, /*string*/
        WarrValidNumber: PropTypes.string.isRequired, /*number > 0*/
        WarrValidURL: PropTypes.string.isRequired, /*url*/
        WarrValidInteger: PropTypes.string.isRequired, /*number Integer*/
    };

    state = {
        editedItemCode: null,
        selectedItemCode: null,
        items: this.props.items,
        selecteditem: this.props.items,
        editeditem: [],
        workMode: null,

        isSingleItemChange: false,

        /* Edit input value*/
        changedNameItemText: '',
        changedItemExpert:'',
        changedItemImage: '',
        changedItemPrice:0,
        changedItemStock:0,

        /*Add New*/
        newCode: this.props.items.length,

        /*Validation Boolen*/

        /*validateExpert: '',
        validateImage: '',
        validatePrice: '',
        validateStock: '',*/

    };



    clickItem = (code) =>  {
        // устанавливаем в стейте код товара, по которому был клик
        this.setState( {selectedItemCode:code, workMode:1}, this.showSelectedSingleItem );
        //this.setState( {workMode:1} );

    };

    removeItemconfirm = (code) =>  {

      if (confirm('Удалить товар ?')) {
          // если в окне нажали ОК -
          //удаляем с помощью splice 1 строку в массиве в стейте по индексу. Индекс получаем сравнивая передаваемый код при клике и код в строке.
          this.state.items.splice(this.state.items.findIndex(i => i.code === code), 1);
          //устанавливаем в стейт полученный массив после удаления
          this.setState({items: this.state.items});
      }
      console.log(this.state.items);
    };

    editSingleItem = (code) => {
        this.setState( {editedItemCode:code, selectedItemCode:code, workMode: 2}, this.showSelectedSingleItem);
        //console.log(`${this.state.workMode} - ${this.state.editedItemCode}`);
    };
    addNewItem = () => {
        this.setState( {workMode: 3}, this.showSelectedSingleItem);
    };




    onChangedVoteitemName = (EO) => {
        this.setState({changedNameItemText: EO});
        this.setState({isSingleItemChange: true});
    };
    onChangedVoteitemExpert = (EO) => {
        this.setState({changedItemExpert: EO});
        this.setState({isSingleItemChange: true});
    };
    onChangedVoteitemImage = (EO) => {
        this.setState({changedItemImage: EO});
        this.setState({isSingleItemChange: true});
    };
    onChangedVoteitemPrice = (EO) => {
        this.setState({changedItemPrice: +EO});
        this.setState({isSingleItemChange: true});
    };
    onChangedVoteitemStock = (EO) => {
        this.setState({changedItemStock: +EO});
        this.setState({isSingleItemChange: true});
    };


    ChangeWorkmodeonCalcel = () => {

        //this.setState({items: this.props.items});
        this.setState({workMode: 0});
        this.setState({selectedItemCode: 0});
        this.setState({editedItemCode: 0});
    };

    showSelectedSingleItem = () => {

        let items = this.state.items.filter(item => item.code === this.state.selectedItemCode);

        this.setState( {selecteditem: items});

        this.setState( {changedNameItemText:`${items.map(i => i.itemName)}`});
        this.setState( {changedItemExpert:`${items.map(i => i.expert)}`});
        this.setState( {changedItemImage:`${items.map(i => i.itemImg)}`});
        this.setState( {changedItemPrice:+`${items.map(i => i.itemPrice)}`});
        this.setState( {changedItemStock:+`${items.map(i => i.itemStock)}`});

        console.log(items);
        console.log(this.state.selectedItemCode);
    };

    SaveEditedItem = () => {
        this.state.selecteditem.forEach(item => {
                item.itemName = this.state.changedNameItemText;
                item.expert = this.state.changedItemExpert;
                item.itemImg = this.state.changedItemImage;
                item.itemPrice = +this.state.changedItemPrice;
                item.itemStock = +this.state.changedItemStock;
        });

        if (this.state.Workmode===3) {
            this.setState(prevState => ({newCode: prevState.newCode++}) );

            let newItem = this.state.selecteditem.map(item => {
                item.itemName = this.state.changedNameItemText;
                item.expert = this.state.changedItemExpert;
                item.itemImg = this.state.changedItemImage;
                item.itemPrice = +this.state.changedItemPrice;
                item.itemStock = +this.state.changedItemStock;
            });
            this.setState({selecteditem: [...this.state.selecteditem, newItem]})
        }

        //editedItem=editedIte.map()
        //this.setState({items: this.props.items});
        this.setState({workMode: 0});
        this.setState({selectedItemCode: 0});
        this.setState( {changedNameItemText: ''});
        this.setState( {changedItemExpert: ''});
        this.setState( {changedItemImage: ''});
        this.setState( {changedItemPrice: 0});
        this.setState( {changedItemStock: 0});


    };

    addNewSingleItem = () => {
        //let newCode = this.state.items.length;

        this.setState(prevState => ({newCode: ++prevState.newCode}) );

    };

    render() {
      // в переменной массив товаров,
      // передаем в компонент Shopitems пропсы по каждому товару из массива
      let itemsCode=this.state.items.map( item =>
        <ShopItems
            key = {item.code}
            code = {item.code}
            itemImg = {item.itemImg}
            itemName = {item.itemName}
            expert = {item.expert}
            itemPrice = {item.itemPrice}
            itemStock = {item.itemStock}

         cbItemClickSelected = {this.clickItem}
         cbRemoveitem = {this.removeItemconfirm}
         cbEditeItem = {this.editSingleItem}
         selectedItemCode = {this.state.selectedItemCode}
         items = {this.state.items}

            isSingleItemAnyChange = {this.state.isSingleItemChange}
            startWorkmode = {this.state.workMode}
        />
      );
      //let selectedSingleItemCode = this.state.selecteditem.map( item =>
        let selectedSingleItemCode =  <SingleItem
              /*key = {item.code}
              code = {item.code}
              itemImg = {item.itemImg}
              itemName = {item.itemName}
              expert = {item.expert}
              itemPrice = {item.itemPrice}
              itemStock = {item.itemStock}*/



              //selectedSingleItem = {this.state.selecteditem}
              startWorkmode = {this.state.workMode}

              //validateItemNameValue = {this.state.validateNameItem}
              cbEditeItem = {this.editSingleItem}

              cbChangedVoteitemName = {this.onChangedVoteitemName} /*cb содержимое редактируемого itemName*/
              ValuechangedNameItemText = {this.state.changedNameItemText} /*Value - редактируемого itemName через пропс*/

              cbChangedVoteExpert = {this.onChangedVoteitemExpert}  /*cb содержимое редактируемого expert*/
              ValuechangedItemExpert = {this.state.changedItemExpert}  /*Value - редактируемого expert через пропс*/

              cbChangedVoteImage = {this.onChangedVoteitemImage}  /*cb содержимое редактируемого image*/
              ValuechangedItemImage = {this.state.changedItemImage}  /*Value - редактируемого image через пропс*/

              cbChangedVotePrice = {this.onChangedVoteitemPrice}  /*cb содержимое редактируемого price*/
              ValuechangedItemPrice = {this.state.changedItemPrice}  /*Value - редактируемого price через пропс*/

              cbChangedVoteStock = {this.onChangedVoteitemStock}  /*cb содержимое редактируемого Stock*/
              ValuechangedItemStock = {this.state.changedItemStock}  /*Value - редактируемого Stock через пропс*/


              selectedItemCode = {this.state.selectedItemCode}

              cbChangeWorkmodeonCalcel = {this.ChangeWorkmodeonCalcel} /* cb Отмена редактирования*/

              cbSaveEditItem = {this.SaveEditedItem} /* cb Сохранение редактируемого товара*/

              WarrValidString = {this.props.WarrValidString}
              WarrValidNumber = {this.props.WarrValidNumber}
              WarrValidURL = {this.props.WarrValidURL}
              WarrValidInteger = {this.props.WarrValidInteger}
          />
     //);
;
      return (
          <div>
             <div className = 'CatBlock'>
                  <ShopNameTitle
                        shopName = {this.props.shopName}
                        emptyShopName = {this.props.emptyShopName}
                        items = {this.state.items}
                  />
                  <div className ='catItems'>
                      {itemsCode}
                  </div>
                  <input
                      type ='button'
                      value = 'Добавить новый товар'
                      onClick = {this.addNewItem}
                      disabled={this.state.workMode===2}
                  />
            </div>
            <div className= 'SingleItemCode'>
              {selectedSingleItemCode}
            </div>
          </div>
      );
    }
  
  }
export default CatBlock;