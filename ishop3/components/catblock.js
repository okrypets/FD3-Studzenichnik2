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

        startWorkmode: PropTypes.number,   /* 1 - карточка товара, 2 - Редактирование, 3 - Добавление нового товара*/

        //isSingleItemAnyChange: PropTypes.boolen,


        WarrValidString: PropTypes.string.isRequired, /*string*/
        WarrValidNumber: PropTypes.string.isRequired, /*number > 0*/
        WarrValidURL: PropTypes.string.isRequired, /*url*/
        WarrValidInteger: PropTypes.string.isRequired, /*number Integer*/
    };

    state = {
        editedItemCode:0,
        selectedItemCode: 0,
        items: this.props.items,
        selecteditem: this.props.items,
        workMode: 0,

        isSingleItemChange: false,

        /* Edit input value*/
        changedNameItemText: '',
        changedItemExpert:'',
        changedItemImage: '',
        changedItemPrice:0,
        changedItemStock:0,

        /*Add New*/
        newCode: 0,
    };

    clickItem = (code) =>  {
        // устанавливаем в стейте код товара, по которому был клик
        this.setState( {selectedItemCode:code, workMode:1}, this.showSelectedSingleItem );

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
        this.clearState();
        this.setState({workMode: 3}, this.showSelectedSingleItem);
    };

    clearState = () => {
        this.setState({
            selectedItemCode: 0,
            changedNameItemText: '',
            changedItemExpert: '',
            changedItemImage: '',
            changedItemPrice: 0,
            changedItemStock: 0});
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

        this.setState({workMode: 0, selectedItemCode: 0, editedItemCode: 0});
    };

    showSelectedSingleItem = () => {

        let items = this.state.items.filter(item => item.code === this.state.selectedItemCode);
        console.log(items);

        for (let {itemName, expert, itemImg, itemPrice, itemStock} of items) {
            this.setState( {
                changedNameItemText:itemName,
                changedItemExpert:expert,
                changedItemImage:itemImg,
                changedItemPrice:itemPrice,
                changedItemStock:itemStock});
        }

        let newcode = this.state.items.length + 1;
        this.setState( {
            selecteditem: items,
            newCode: newcode,
        });

        console.log(`Код выбранного товара ${this.state.selectedItemCode}`);
    };

    SaveEditedItem = () => {
        this.state.selecteditem.forEach(item => {
                item.itemName = this.state.changedNameItemText;
                item.expert = this.state.changedItemExpert;
                item.itemImg = this.state.changedItemImage;
                item.itemPrice = +this.state.changedItemPrice;
                item.itemStock = +this.state.changedItemStock;
        });

        this.setState({
            workMode: 0,
            isSingleItemChange: false,
        }, this.clearState);
    };

    SaveADDItem = () => {
        let items = this.state.items;
        let newItem = [
            {
                itemName : this.state.changedNameItemText,
                code:this.state.newCode,
                itemImg : this.state.changedItemImage,
                itemPrice : +this.state.changedItemPrice,
                itemStock : +this.state.changedItemStock,
                expert : this.state.changedItemExpert,
            }
        ];
        items.push(...newItem);
        this.setState({
            workMode: 0,
            isSingleItemChange: false,
            items: items,
        }, this.clearState);
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

        let selectedSingleItemCode =  <SingleItem

              addItemnewCode = {this.state.newCode}

              startWorkmode = {this.state.workMode}

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
              cbSaveAddItem = {this.SaveADDItem} /* cb Сохранение нового товара*/

              WarrValidString = {this.props.WarrValidString}
              WarrValidNumber = {this.props.WarrValidNumber}
              WarrValidURL = {this.props.WarrValidURL}
              WarrValidInteger = {this.props.WarrValidInteger}
          />;

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
                      disabled={this.state.workMode===2 || this.state.workMode===3}
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