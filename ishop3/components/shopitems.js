import React from 'react';
import PropTypes from 'prop-types';

import './shopitems.css';

class ShopItems  extends React.Component {

    /*displayName: 'Shopitems',*/

    static propTypes = {
        itemStock: PropTypes.number.isRequired,
        itemPrice: PropTypes.number.isRequired,
        expert: PropTypes.string,
        itemName: PropTypes.string.isRequired,
        itemImg: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,

        cbItemClickSelected: PropTypes.func,
        cbRemoveitem: PropTypes.func,
        cbEditeItem: PropTypes.func,

        selectedItemCode: PropTypes.number,
        seditedItemCode: PropTypes.number,

        //isSingleItemAnyChange: PropTypes.boolen,

        startWorkmode: PropTypes.number,   //* 1 - карточка товара, 2 - Редактирование, 3 - Добавление нового товара*/
    };

    deleteItem = () =>  {
        /*передаем через callback код товара, в котором нажали кнопку удалить*/
        this.props.cbRemoveitem(this.props.code);
    };

    clickItem = () => {
        /*передаем через callback код товара, по которому кликнули*/
        this.props.cbItemClickSelected(this.props.code);
    };
    editeItem = () => {
        /*передаем через callback код товара, по которому кликнули*/
        console.log(`Кликнули Редактировать по товару с кодом ${this.props.code}`);
        this.props.cbEditeItem(this.props.code);
    };

    render() {

        return (

            <div className = {`CatBlockShopItems ${(this.props.selectedItemCode===this.props.code) ? 'colored' : ''}`}>
                <div className = 'Item' data = {this.props.code} onClick = {!(this.props.isSingleItemAnyChange ||this.props.startWorkmode === 3 ) ? this.clickItem : null} >
                    <img className ='itemImg' src = {`./components/images/${this.props.itemImg}`} alt = ''/>
                    <div className = 'itemInfo'>
                        <h2 className = 'itemName'>{this.props.itemName}</h2>
                        <div className = 'itemExpert'>{this.props.expert}</div>
                    </div>
                    <div className = 'priceBlock'>
                        <div className = 'itemPrice'>
                            <span className = 'Price'>{this.props.itemPrice}</span>
                            р.
                        </div>
                        <div className = 'itemStock'>
                            На складе:
                            <span className = 'Stock'>{this.props.itemStock}</span>
                            /шт.
                        </div>
                    </div>
                </div>
                <div className = 'buttonBlock'>
                     <input
                         type ='button'
                         value = 'Удалить товар'
                         onClick = {this.deleteItem}
                         disabled={this.props.startWorkmode===2 || this.props.startWorkmode === 3}
                     />

                    <input
                        type ='button'
                        value = 'Редактировать'
                        className= 'red'
                        onClick = {this.editeItem}
                        disabled  = {(this.props.isSingleItemAnyChange && this.props.startWorkmode===2 || this.props.startWorkmode === 3)}
                    />
                </div>
            </div>
        );
    }
}
export default ShopItems;